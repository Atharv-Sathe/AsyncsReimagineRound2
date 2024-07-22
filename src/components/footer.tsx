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
                                <a href={item[1]} target='_blanck'>{item[0]}</a>
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
            <div id="logo-content" className="ml-2">
                <img src="/logo.png" alt="bluestone logo"  className="w-20 h-20"/>
            </div>
            <div id="newsletter">
                <h1 className="text-4xl font-custom">News Letter Signup</h1>
                <p className="text-2xl">Sign up to our regular news letter to be updated about latest launches.</p>
            </div>
            <div id="search" className="h-full flex flex-row justify-center items-center gap-4">
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
        <div className='flex flex-row justify-evenly'>
            {/* <div className='flex flex-col gap-4'>
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
            </div> */}
            {footerContent.map((content, index) => {
                return <FooterContent key={index} title={content.title} content={content.content} />
            })}
        </div>
        <div>

        </div>
        <aside className="text-center">
            <p>Copyright © {new Date().getFullYear()} - All rights reserved @ Asyncs</p>
        </aside>
    </footer>
    );
}

export default Footer;