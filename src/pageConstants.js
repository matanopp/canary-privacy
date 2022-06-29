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
            'name': "The cookie's name.",
            'status': 'Mismanaged - Users will still be served this cookie after they opt out of cookies on your website. This cookie may not be properly integrated with your cookie consent management tool. <br/>Misclassified - Users may be served this cookie when they opt into a different category of cookies. For example, sometimes advertising cookies are accidentally misclassified as analytics cookies and are served when the user opts into analytics only.',
            'classificationExpected': 'The classification category that we expected based on the Canary Privacy cookie database.<br/>If Expected Classification differs from Actual Classification, you may consider reclassifying the cookie so your cookie consent management tool is able to control the cookie.',
            'classificationActual': 'The classification category that was observed for a cookie at the time of testing.<br/>If Actual Classification differs from Expected Classification, you may consider reclassifying the cookie so your cookie consent management tool is able to control the cookie.',
            'beforeOptIn': 'This cookie is served before the visitor accepts cookies on your site. Generally, sites cannot serve cookies to visitors from the European Union until the user consents to the cookie. <br/>Only cookies that are “strictly necessary”, or essential for you to browse the website and use its features per the GDPR (Subject to change) may be allowed before opt-in.',
            'domain': 'The source domain of a cookie.'
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
            'url': 'The full web address (URL) of the detected webpage.',
            'dateDetected': 'The date when a new page on your website was detected.',
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
            'scriptName': 'The name of the script.',
            'baseDomain': 'The base domain of a script.',
            'scriptUrl': 'The full script URL.',
            'urls': 'The page or pages where Canary Privacy detected the script. Click to expand. Highlight and drag to copy.',
            'dateDetected': 'The date when Canary Privacy scanned and detected a new script on your website.',
        },
    },
    forms: {
        keys: [
            'formId',
            'urls',
            'formText',
            'dateDetected',
        ],``
        headers: {
            'formId': 'Form ID',
            'urls': 'Pages',
            'formText': 'Data Elements',
            'dateDetected': 'Date Detected',
        },
        tooltipDescriptions: {
            'formId': 'The form ID as set by the website manager or third party tool used to create the form.',
            'urls': 'The webpage address (URL) where the form was found. Sometimes the form is displayed via click or popup from the page listed below.',
            'formText': 'Data elements collected by the form.',
            'dateDetected': 'The date when Canary Privacy scanned and detected a new form on your website.',
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
            'name': "The cookie's name.",
            'domain': 'The source domain of a cookie.',
            'type' : 'The cookie category that was observed at the time of testing. Cookie classifications indicate the purpose of a cookie and include: <br/>Strictly Necessary, Preference (also known as “Functional”), Statistics (also known as “Performance”), and Marketing (also known as “Advertising”).',
            'platform' : 'The platform that is the source of this cookie. Often, this platform also receives the data associated with this cookie.',
            'description': 'A brief description that explains the purpose of the cookie and if served by a 3rd party, <br/>more information about the 3rd party entity.',
            'retention_period': 'How long a cookie will last from being set on page load or after opt-in. <br/>Cookies automatically expire when the Duration expires and a cookie isn’t set again via site visit or opt-in.',
            'urls' : 'The web page or web pages where a cookie was detected.',
            'dateDetectedParsed' : 'The date when a cookie was detected on your website.'
        }
    }
}