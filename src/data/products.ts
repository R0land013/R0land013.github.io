
interface Product {
    name: string;
    iconPath?: string;
    markdownDescription: string
}

const devLinksDescription =
`
**Dev Links** is an open source browser extension that allows to find
useful resources and tools as developer or designer.
It is available for [Chrome, Brave and Opera](https://chrome.google.com/webstore/detail/dev-links/eogoekcejgaaaodjgbhnlpmccdmboapb?hl=en-GB).
You can get it for [Edge](https://microsoftedge.microsoft.com/addons/detail/dev-links/aniglhjaambcimldjhiphablecafiifg)
and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/dev-links/) too.
If you wish to contribute to the project you can do it [here](https://github.com/R0land013/dev-links).
`;

const bluePOSDescription =
`
**Blue POS** is a free and open source desktop app used to manage selling points
in Cuba. It allows you to manage the **products**, **sales** and **expenses** of your
business. By using this app you can see daily, weekly, monthly, yearly and
customized **reports** of the sales and expenses of your store. It also shows
**charts** with the behavior of the distinct variables your business has, making
easier the process of decision taking.

If you are interested in knowing more about it or want to contribute, click
[here](https://github.com/R0land013/blue-pos).
`;

const blueNautaDescription =
`
**Blue Nauta** is a client app to make easy the process of logging in and logging out
from the Nauta Captive Portal.

If you want to know more about this app or contribute to the project go to see
the [repo](https://github.com/R0land013/blue-nauta).
`;

const products: Array<Product> = [
    {
        name: 'Dev Links',
        markdownDescription: devLinksDescription,
        iconPath: '/images/dev-links.svg',
    },
    {
        name: 'Blue POS',
        markdownDescription: bluePOSDescription,
        iconPath: '/images/bluepos.png',
    },
    {
        name: 'Blue Nauta',
        markdownDescription: blueNautaDescription,
        iconPath: '/images/bluenauta.png'
    }
];

export default products;