type FooterProps = {
    urls: { name:string;
            links:{
                name:string,
                url:string
            }[]; 
        }[]
}

const FooterList = (name:string, links:{name:string, url:string}[]) => {
    const linkElements:React.ReactNode[]  = links.map((link) => (
        <div className="footer-col">
            <a key={link.name} href={link.url}>{link.name}</a>
            <br />
        </div>    
    ))
    return(
        <div className="footer-col">
            <h4>{name}</h4>
            {linkElements}
        </div>
    ) 
}

const FooterCol = (data: FooterProps) => {
    const list:React.ReactNode[] = data.urls.map((item) => (
        FooterList (item.name, item.links)
    ))
    return <div className="footer-row">{list}</div>
}

export default FooterCol;