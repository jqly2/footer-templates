import { FOOTERLINK } from '../constants';

type FooterProp = {
    css: string;
}

interface Props extends FooterProp {
    data: {name: string, url: string}[];
}

interface ChildProps {
    name:string;
    url: string
}

const FooterCol = ({name, url}: ChildProps) => 
    <>
        <a href={url}>{name}</a>
        &nbsp; | &nbsp;
    </>

const FooterRow = ({data, css}: Props) => {
    const list:React.ReactNode[] = []
    data.map((item, index) => {
        list.push(
            <FooterCol key={index} name={item.name} url={item.url} />
        )
        return list
    })
    return (
        <footer className={`${css}`}>
            {list}
        </footer>
    )
}

const Footer = ({css}: FooterProp) => <FooterRow data={FOOTERLINK} css={css}/>;  

export default Footer;