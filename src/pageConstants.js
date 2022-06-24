export const pageConstants = {
    emails: {
        keys: [
            'priority',
            'testAddress',
            'testDate',
            'testPage',
            'emailsReceived',
            'senderAddress',
        ],
        headers: {
            'priority': 'Priority',
            'testAddress': 'Test Address',
            'testDate': 'Test Date',
            'testPage': 'Opt-In Page',
            'emailsReceived': 'Emails Received After Opt-Out',
            'senderAddress': 'Sender Address',
        },
        tooltipDescriptions: {
            'priority': 'High priority indicates that your business sent emails beyond the 10 business day grace period allowed after a user opts out of your emails.<br/>These emails risk fines under the US CAN-SPAM Act and Canada\'s CASL legislation.',
            'testAddress': 'The address Canary Privacy used to sign up for the email.',
            'testDate': 'The email opt-in date.',
            'testPage': 'The web page where Canary Privacy entered an email address for opt-in.',
            'emailsReceived': 'The number of emails sent after 10 business days have elapsed since opt-out.<br/>We unsubscribe from all email communications and monitor an inbox for emails that are sent against a user’s consent. These emails risk fines under the US CAN-SPAM Act and Canada\'s CASL legislation.',
            'senderAddress': 'The business email address that was associated with a confirmation email after opt-in<br/>or the first email communication that your business sent to the user.',
        },
    },
    cookies: {
        keys: [
            'risk',
            'name',
            'status',
            'classificationExpected',
            'classificationActual',
            'beforeOptIn',
            'domain',
        ],
        headers: {
            'risk': 'Risk',
            'name': 'Name',
            'status': 'Status',
            'classificationExpected': 'Expected Classification',
            'classificationActual': 'Actual Classification',
            'beforeOptIn': 'Served Before Opt-In',
            'domain': 'Domain',
        },
        tooltipDescriptions: {
            'risk': 'This is a potential issue with your site that raises your risk of complaint, investigation or fine.',
            'classificationExpected': 'The classification category that we expected based on the Canary Privacy cookie database.<br/>If Expected Classification differs from Actual Classification, you may consider reclassifying the cookie so your cookie consent management tool is able to control the cookie.',
            'classificationActual': 'The classification category that was observed for a cookie at the time of testing.<br/>If Actual Classification differs from Expected Classification, you may consider reclassifying the cookie so your cookie consent management tool is able to control the cookie.',
            'beforeOptIn': 'This cookie is served before the visitor accepts cookies on your site. Generally, sites cannot serve cookies to visitors from the European Union until the user consents to the cookie. <br/>Only cookies that are “strictly necessary”, or essential for you to browse the website and use its features per the GDPR (Subject to change) may be allowed before opt-in.'
        },
    },
    pages: {
        keys: [
            'url',
            'dateDetected',
        ],
        headers: {
            'url': 'Page URL',
            'dateDetected': 'Date Detected',
        },
        tooltipDescriptions: {
        },
    },
    scripts: {
        keys: [
            'scriptName',
            'baseDomain',
            'scriptUrl',
            'urls',
            'dateDetected',
        ],
        headers: {
            'scriptName': 'Script Name',
            'baseDomain': 'Base Domain',
            'scriptUrl': 'Script URL',
            'urls': 'Pages',
            'dateDetected': 'Date Detected',
        },
        tooltipDescriptions: {
        
        },
    },
    forms: {
        keys: [
            'formId',
            'urls',
            'formText',
            'dateDetected',
        ],
        headers: {
            'formId': 'Form ID',
            'urls': 'Pages',
            'formText': 'Data Elements',
            'dateDetected': 'Date Detected',
        },
        tooltipDescriptions: {
            
        },
    },
    rawCookies: {
        keys: [
            'name',
            'domain',
            'type',
            'platform',
            'description',
            'retention_period', // TODO: Take from cookie and not from DB.
            'dateDetectedParsed',
            'regulation_link',
            'urls',
            // 'dateDetectedParsed'
        ],
        headers: {
            'name': 'Cookie Name',
            'domain' : 'Domain',
            'type' : 'Classification',
            'platform' : 'Platform',
            'description' : 'Description',
            'retention_period' : 'Duration',
            'regulation_link' : 'User Privacy Portals', //& GDPR Rights 
            'urls': 'Pages',
            'dateDetectedParsed' : 'Date Detected'
        },
        tooltipDescriptions: {
            'type' : 'The cookie category that was observed at the time of testing. Cookie classifications indicate the purpose of a cookie and include: <br/>Strictly Necessary, Preference (also known as “Funcional”), Statistics (also known as “Performance”), and Marketing (also known as “Advertising”).',
            'description': 'A brief description that explains the purpose of the cookie and if served by a 3rd party, <br/>more information about the 3rd party entity.',
            'retention_period': 'How long a cookie will last from being set on page load or after opt-in. <br/>Cookies automatically expire when the Duration expires and a cookie isn’t set again via site visit or opt-in.',
            'urls' : 'The web page or web pages where a cookie was detected.'
        }
    }
}