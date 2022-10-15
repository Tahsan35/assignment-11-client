import React from 'react';

const Blogs = () => {
    return (
        <div className="container accordion accordion-flush border  mx-auto my-16" id="accordionFlushExample">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingOne">
                    <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-leftbg-white border-0 rounded-none
                transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        Different between javascript and node.js
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">
                        জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটে স্ক্রিপ্ট লেখার জন্য ব্যবহৃত হয় । নোডজেএস একটি জাভাস্ক্রিপ্ট রানটাইম পরিবেশ ।
                        জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যেতে পারে। আমরা NodeJS এর সাহায্যে ব্রাউজারের বাইরে Javascript চালাতে পারি।
                        জাভাস্ক্রিপ্ট মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়। নোডজেএসবেশিরভাগই সার্ভার-সাইডে ব্যবহৃত হয়।
                        জাভাস্ক্রিপ্ট এইচটিএমএল যোগ করতে এবং DOM এর সাথে চলতে যথেষ্ট সক্ষম। Nodejs এর HTML ট্যাগ যোগ করার ক্ষমতা নেই।
                        জাভাস্ক্রিপ্ট যেকোন ব্রাউজার ইঞ্জিনে চলতে পারে যেমন সাফারিতে জেএস কোর এবং ফায়ারফক্সে স্পাইডারমনকি। V8 হল node.js এর ভিতরে জাভাস্ক্রিপ্ট ইঞ্জিন যা জাভাস্ক্রিপ্ট পার্স করে এবং চালায়।
                    </div>
                </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingTwo">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 
                text-base text-gray-800 text-left bg-white border-0 rounded-none transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        What is the purpose of jwt and how does it work ?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">
                        JWT বা JSON Web Token! একটি উন্মুক্ত মান যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করার জন্য ব্যবহৃত হয় - একটি ক্লায়েন্ট এবং একটি সার্ভার।
                        প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে।
                        JWT একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে স্বাক্ষর করা হয় যাতে টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যায় না।
                        JWTs অন্যান্য ওয়েব টোকেন থেকে আলাদা যে তারা দাবির একটি সেট ধারণ করে । দাবি দুটি পক্ষের মধ্যে তথ্য প্রেরণ করতে ব্যবহার করা হয়.এই দাবিগুলি কী তা নির্ভর করে হাতে থাকা ব্যবহারের ক্ষেত্রে।
                        উদাহরণ স্বরূপ, একটি দাবি দাবী করতে পারে কে টোকেন জারি করেছে, এটি কতদিনের জন্য বৈধ, বা ক্লায়েন্টকে কী অনুমতি দেওয়া হয়েছে।
                    </div>
                </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingThree">
                    <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        Differences between sql and nosql databases.
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body py-4 px-5">
                        SQL রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS) । NoSQL নন-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেস সিস্টেম।
                        SQL ডাটাবেসের ফিক্সড বা স্ট্যাটিক বা প্রি-ডিফাই্ন স্কিমা আছে । NoSQL গতিশীল স্কিমা আছে।
                        ইহা ডাটাবেস শ্রেণীবদ্ধ ডেটা স্টোরেজের জন্য উপযুক্ত নয় । NoSQL ডাটাবেসগুলি শ্রেণীবদ্ধ ডেটা স্টোরেজের জন্য সবচেয়ে উপযুক্ত ।
                        ইহা ডাটাবেসগুলি জটিল কোয়েরিস জন্য সবচেয়ে উপযুক্ত । এটি ডাটাবেসগুলি জটিল কোয়েরিস জন্য এত ভাল নয় ।
                        SQL ভার্টিকেলি মাপযোগ্য । NoSQL হরিযন্টাল মাপযোগ্য ।
                        SQL ACID প্রোপার্টি অনুসরণ করে । NoSQL CAP অনুসরণ করে (consistancy, availability, partition tolerance)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;