sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/booksui/test/integration/FirstJourney',
		'my/booksui/test/integration/pages/BooksList',
		'my/booksui/test/integration/pages/BooksObjectPage',
		'my/booksui/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/booksui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);