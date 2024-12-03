sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/bookshopapp/test/integration/FirstJourney',
		'my/bookshopapp/test/integration/pages/List',
		'my/bookshopapp/test/integration/pages/ObjectPage'
    ],
    function(JourneyRunner, opaJourney, List, ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/bookshopapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheList: List,
					onTheObjectPage: ObjectPage
                }
            },
            opaJourney.run
        );
    }
);