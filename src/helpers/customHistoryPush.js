const customHistoryPush = () => {
    setTimeout(() => {
        window.dataLayer.push({
            event: 'custom.historyChange',
            custom: {
                historySource: 'pushState'
            }
        })
    }, 500);
}

export default customHistoryPush;