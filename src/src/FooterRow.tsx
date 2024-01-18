type FooterProps = { 
    urls:{
        name:string;
        url:string;
        }[]      
} 

const FooterCol = (name:string, url:string) => 
    <>
        <a href={url}>{name}</a>
        &nbsp; | &nbsp;
    </>

const FooterRow = (data: FooterProps) => {
    const list:React.ReactNode[] = []
    data.urls.map((item) => {
        list.push(
            FooterCol(item.name,item.url)
        )
        return list
    })
    return (
        <footer className="footer-row">
            {list}
        </footer>
    )
}

export default FooterRow;