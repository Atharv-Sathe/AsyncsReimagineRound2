import { useState } from 'react';
import './footer.css';


const footerContent = [
    {title : 'ABOUT US',
        content : [
   
            ['Who we are?', 'https://www.bluestone.com/about.html'],
            ['Management Team', 'https://www.bluestone.com/about.html#mgmt'],
            ['Careers', 'https://app1261.workline.hr/Cportal/GeneralOpening.aspx'],
            ['Design Philosophy', 'https:blog.bluestone.com']
        ]
   
        },
        {title : 'CUSTOMER DELIGHT',
        content : [
         
            ['Contact Us', 'https://www.bluestone.com/contact.html'],
            ['FAQ', 'https://www.bluestone.com/faq.html']
        ]

        },
        {title : 'POLICIES',
        content : [
         
            ['30-Day Returns', 'https://www.bluestone.com/shipping-return.html'],
            ['Lifetime Exchange & Buy back', 'https://www.bluestone.com/shipping-return.html#lifetime-exchange'],
            ['Privacy Policy', 'https://www.bluestone.com/privacy.html'],
            ['Terms & Conditions', 'https://www.bluestone.com/tnc.html'],
            ['Fraud Warning Disclaimer', 'https://www.bluestone.com/fraud-warning-disclaimer.html']
        ]
         
        },
        {title : 'SHOP WITH CONFIDENCE',
        content : [
         
            ['Why Buy From Us?', 'https://www.bluestone.com/whybuyfromus.html'],
            ['Our Certifications', 'https://www.bluestone.com/certifications.html'],
            ['Press Room', 'https://www.bluestone.com/press-room.html'],
            ['Testimonials', 'https://www.bluestone.com/testimonials.html'],
            ['Corporate Gifting', 'mailto:corporate.gifting@bluestone.com']
        ]
         
   
        },
        {title : 'JEWELLERY GUIDE',
        content : [
           
           ['Buying and Price Guide', 'https:www.bluestone.com/jewellery-education/buying-and-price-guide/diamond-jewellery-guide'],
           ['Certification Guide', 'https:www.bluestone.com/jewellery-education/certification-guidebis-hallmark'],
           ['Diamond and Solitaire Guide', 'https:www.bluestone.com/jewellery-education/diamond-and-solitaire-guidediamond-carat'],
           ['Gemstone Guide', 'https:www.bluestone.com/jewellery-education/gemstone-guideamethyst'],
           ['Gifting Guide', 'https:www.bluestone.com/jewellery-education/gifting-guideakshaya-tritiya'],
           ['Jewellery Care Guide', 'https:www.bluestone.com/jewellery-education/jewellery-care-guidecaring-for-diamonds']
        ]
        }
]

type FooterContentProps= {
    title: string;
    content: string[][];
}

function FooterContent({title, content}: FooterContentProps) {
    return (
        <section className='flex flex-col gap-3'>
            <h1 id='title' className='font-custom text-lg text-royal-gold'>{title}</h1>
            <div>
                <ul>
                    {content.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item[1]} target='_blanck' id='animate-link'>{item[0]}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}


function Footer() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        console.log(isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 500);
    }


    return (
    <footer className="footer footer-center bg-black text-white text-base-content p-4">
        <div id="newsletter" className="flex flex-row gap-5 items-center justify-evenly w-full rounded-md h-40">
            <div id="logo-content" className="ml-2 md:hidden">
                <img src="/logo.png" alt="bluestone logo"  className="w-20 h-20"/>
            </div>
            <div id="newsletter" className='sm:hidden'>
                <h1 className="text-4xl font-custom md:text-xl">News Letter Signup</h1>
                <p className="text-2xl md:hidden">Sign up to our regular news letter to be updated about latest launches.</p>
            </div>
            <div id="search" className="h-full flex flex-row justify-center items-center gap-4 sm:flex-col sm:items-center">
                <input type="email" placeholder="Enter your email" 
                className="w-72 h-12  rounded-md text-2xl p-4 focus:border-4  focus:outline-none valid:border-green-600
                invalid:border-red-600 valid:text-green-600 invalid:text-red-600
                text-black"
                />
                <button id="subscribe"
                className={`${isClicked ? 'sus-active': 'sus-inactive'}`} 
                onClick={handleClick}
                >Subscribe</button>
            </div>
        </div>
        <div>
            <div className='hidden  md:flex md:flex-row md:justify-evenly'>
                <div className='flex flex-col gap-4'>
                    {footerContent.slice(0, 2).map((content, index) => {
                        return <FooterContent key={index} title={content.title} content={content.content} />
                    })}
                </div>
                <div className='flex flex-col gap-4'>
                    {footerContent.slice(2, 4).map((content, index) => {
                        return <FooterContent key={index} title={content.title} content={content.content} />
                    })}
                </div>
                <div>
                    <FooterContent title={footerContent[4].title} content={footerContent[4].content} />
                </div>
            </div>
            <div className='flex flex-row justify-evenly md:hidden'>
                {footerContent.map((content, index) => {
                    return <FooterContent key={index} title={content.title} content={content.content} />
                })}
            </div>
        </div>
        <div id='socials-apps' className='flex flex-row justify-evenly my-6 md:flex-col md:items-center'>
            <div id='socials' className='flex flex-row items-center'>
                <a href="https://www.facebook.com/bluestonejewels"><div className="bg-ico" id="facebook"><i className="fab fa-facebook social  facebook fa-2x"></i></div></a>
                <a href="https://in.pinterest.com/bluestonedotcom/"><div className="bg-ico" id="pinterest"><i className="fab fa-pinterest social  pinterest fa-2x"></i></div></a>
                <a href="https://twitter.com/bluestone_com"><div className="bg-ico" id="twitter"><i className="fab fa-twitter social  twitter fa-2x"></i></div></a>
                <a href="https://www.instagram.com/bluestone_jewellery/"><div className="bg-ico" id="instagram"><i className="fab fa-instagram social  instagram fa-2x"></i></div></a>
                <a href="https://www.youtube.com/user/Bluestonedotcom"><div className="bg-ico" id="youtube"><i className="fab fa-youtube social  youtube fa-2x"></i></div></a>
            </div>
            <div id='mobile-app' className='flex flex-row items-center gap-4'>
                <h1 className='text-lg text-royal-gold font-custom'>Download</h1>
                <p className='sm:hidden'>Shining new app made just for you! <br></br> It's Free, Easy & Smart!</p>
                <a href="https://play.google.com/store/apps/details?id=com.bluestone.android&referrer=website&utm_source%3Dwebsite_footer%26utm_medium%3Dwebsite%26utm_campaign%3Dwebsite" target="_blank" rel="noopener noreferrer">
                <img src="/GooglePlayBadge.png" alt="google play store"
                className='h-32 w-32'
                /></a>
                <a href="https://itunes.apple.com/in/app/bluestone-jewellery-online/id1107631430?mt=8" target="_blank" rel="noopener noreferrer">
                <img src="/AppStoreBadge.png" alt="apple app store" 
                className='h-32 w-32'
                /></a>
            </div>
        </div>

        <aside className="text-center">
            <p>Copyright © {new Date().getFullYear()} - All rights reserved @ Asyncs</p>
        </aside>
    </footer>
    );
}

export default Footer;