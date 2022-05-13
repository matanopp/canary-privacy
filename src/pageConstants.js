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
            'priority': 'Priority Description...',
            'testAddress': 'Test Address Description...',
            'testDate': 'Test Date Description...',
            'testPage': 'Opt-In Page Description...',
            'emailsReceived': 'Emails Received After Opt-Out Description...',
            'senderAddress': 'Sender Address Description...',
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
            'risk': 'Risk Description...',
            'name': 'Name Description...',
            'status': 'Status',
            'classificationExpected': 'Expected Classification Description...',
            'classificationActual': 'Actual Classification Description...',
            'beforeOptIn': 'Served Before Opt-In Description...',
            'domain': 'Domain Description...',
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
            'url': 'Page URL Description...',
            'dateDetected': 'Date Detected Description...',
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
            'scriptName': 'Script Name Description...',
            'baseDomain': 'Base Domain Description...',
            'scriptUrl': 'Script URL Description...',
            'urls': 'Pages Description...',
            'dateDetected': 'Date Detected Description...',
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
            'formId': 'Form ID Description...',
            'urls': 'Pages Description...',
            'formText': 'Data Elements Description...',
            'dateDetected': 'Date Detected Description...',
        },
    },
    rawCookies: {
        keys: [
            'name',
            'domain',
            'urls',
            'dateDetected'
        ],
        headers: {
            'name': 'Cookie Name',
            'domain': 'Domain',
            'urls': 'Pages',
            'dateDetected': 'Date Detected'
        },
        tooltipDescriptions: {
            'name': 'Cookie Name Description...',
            'domain': 'Domain Description...',
            'urls': 'Pages Description...',
            'dateDetected': 'Date Detecte Description...d'
        }
    }
}