import React from 'react';
import whyUs from '../../../assets/images/why-us.svg';
import { Lists } from './Lists';

export const WhyAlts = () => (
    <div>
        <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-around">
            <Lists />
            <img src={whyUs} alt="why-us" className="w-full h-full md:w-1/3" />
        </div>
        <div className="bg-gray-100 mt-8 p-8 text-xs md:text-sm">
            <p className="container text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate cum possimus soluta ad iure recusandae rem hic sunt
                ex minus numquam ipsum neque voluptas odit veritatis assumenda accusamus nesciunt maiores,
                explicabo doloremque deserunt ipsa optio quo quis. A tempora, quas, quae minima nulla blanditiis
                 quidem aliquam natus eveniet qui sapiente, labore exercitationem perspiciatis. Voluptas, delectus? Aliquid, earum.
                 Voluptates vel voluptatem a quod sapiente minima explicabo odit, autem numquam vitae eius quas, voluptatum possimus pariatur
                 labore nam cupiditate optio rerum necessitatibus. Quia, consequatur reiciendis! Consequatur doloremque ipsam qui sed odit! Rerum
                 pariatur aliquam voluptatum, odio eos eum quidem quia eius et.
            </p>
        </div>

    </div>
);
