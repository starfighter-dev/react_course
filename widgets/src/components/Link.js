import React from 'react'

const Link = ({className, href, children}) => {

    const onClick = (event) => {
        // Allow ctrl click to open in a new tab (just do nothing and let the browser work)
        if ( event.metaKey || event.ctrlKey ) {
            return;
        }
        event.preventDefault()
        window.history.pushState({}, '', href)
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link