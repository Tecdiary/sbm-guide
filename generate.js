const through2 = require('through2'),
    markdownpdf = require('markdown-pdf');

// function preProcessMd() {
//     var splitter = split();
//     var replacer = through(function(data) {
//         // this.queue(data.replace(/sbm-guide\/assets\/img/g, 'assets/img'));
//         // this.queue(data.replace(/\[\[toc\]\]/g, ''));
//     });
//     splitter.pipe(replacer);
//     return duplexer(splitter, replacer);
// }

function preProcessMd() {
    return through2((data, enc, cb) => {
        let pageBreak = "\n\n<div style='page-break-before: always;'></div>\n\n";
        let nd = data
            .toString()
            .replace(
                /\!\[Table Image\]\(\/sbm-guide\/\assets\/\img\/table-design.png "Table Design"\)/,
                '<div class="table-image"><img src="assets/assets/img/table-design.png" alt="Table Image" title="Table Design"></div>'
            )
            .replace(/## Table Design/, pageBreak + '## Table Design')
            .replace(/\/sbm-guide\/assets\/img/gs, 'assets/assets/img')
            .replace(/::: warning/gs, '<div class="warning">')
            .replace(/:::/gs, '</div>')
            .replace(/`composer install`/gs, '<code>composer install</code>')
            .replace(/\[\[toc\]\]/, '');
        cb(null, new Buffer(nd + pageBreak));
    });
}

var mdDocs = [
        'readme.md',
        '1.0/install/readme.md',
        '1.0/install/service.md',
        '1.0/credit/readme.md',
        '1.0/guide/readme.md',
        '1.0/guide/products-customers-vendors.md',
        '1.0/guide/invoices-purchases.md',
        '1.0/guide/expenses-incomes.md',
        '1.0/guide/accounts-transfers.md',
        '1.0/guide/users-settings.md',
        '1.0/faqs/readme.md',
        '1.0/developer-guide/readme.md'
    ],
    bookPath = 'sbm-guide.pdf';

var options = {
    preProcessMd,
    runningsPath: './runnings.js',
    remarkable: {
        html: true,
        breaks: true,
        syntax: ['header', 'footer']
    },
    paperBorder: { top: '1cm', left: '2cm', bottom: '1cm', right: '2cm' },
    cssPath: 'assets/style.css'
    // cssPath: 'docs/assets/css/0.styles.032ddd1c.css',
    // highlightCssPath: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/atom-one-dark.min.css'
};
markdownpdf(options)
    .concat.from(mdDocs)
    .to(bookPath, function() {
        console.log('Created', bookPath);
    });
