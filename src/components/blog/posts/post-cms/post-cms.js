import React from 'react';
import blogData from "./../../blog-data";
import styles from './post-cms.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function postCMS({match}) {
  return (
    <div className={styles.post}>
        <i className={styles.date}>{blogData[0].date}</i>
        <h2 className={styles.title}>{blogData[0].title}</h2>
        <h3 className={styles.tagLine}>{blogData[0].tagLine}</h3>
        <p>Content management system’s are software application that runs on the web-server and allows a user to easily manage the content of their website. This uses an interface and does not require any programming knowledge to do. This makes it perfect for people who want to have a site that they can keep updated without having to learn to programme or pay a developer to update it for them.</p>
        <img className={styles.responsiveImg} alt="" src={blogData[0].img} />
        <p>There are many CMS’s available today, all with various pros and cons. The most widely used however is WordPress. This dominates the CMS market being used by 59.9% of all known CMS websites (and there is a lot). It also accounts for a whopping 31.7% of all websites!</p>
        <i>(W3Techs.com, 1 September 2018)</i>
        <br />
        <h3>So how is this better than your own code?</h3>
        <p>Developing websites from scratch is no easy feat, and many new developers want to prove to themselves and others that they can create anything and everything from scratch, this is good to learn but its also good to be aware that reinventing the wheel every time you have a new project can really slow you down. CMS have been developed for many years and if you want to make simple static advertisement websites or blogs then no matter your skill level you would be losing a lot of time and taking on a whole lot of extra work to produce a site similar to what a CMS can do for you.</p>
        <br />
        <div className={styles.postQuote}>
            <h2>”Don’t reinvent the wheel, just realign it.”</h2>
            <h4>Anthony J. D’Angelo</h4>
        </div>
        <br />
        <div className={styles.postLists}>
            <h3>Great! But why choose a CMS over doing it myself?</h3>
            <ul>
            <li><b>Knowledge requirement</b> There is a low entry bar for CMS making development easy and adding the perk of allowing tech savvy clients to edit it themselves without any programming knowledge.</li>
            <li><b>Plugins</b> These can add all sorts of new capabilities to your site, and if it does not exist perhaps you can create your own!</li>
            <li><b>Reduced costs</b> The lower development time, also has the added benefit of making the cost less for your customer.</li>
            <li><b>Templates, Templates, Templates!</b> Every website starts with a template, this is what makes development time so much shorter. </li>
            </ul>
            <br />
            <h3>So what are the downsides?</h3>
            <ul>
            <li><b>Maintenance</b> In the wrong hands, an unmaintained and outdated CMS can do a lot of harm to a website and lead to serious security vulnerabilities.</li>
            <li><b>Adding content</b> Although a user can add content them self doesn’t mean they should, the truth is writing content is a skill and unless they know how to do this or are willing to learn, it may end up to a good site becoming a bad one quickly.</li>
            <li><b>Adding complexity can get messy fast!</b> if you try you can add a heck of a lot of features to your site via plugins and hacking away at the code. However just cause it works does not mean its the right tool for the job, and the result for using the wrong tool is usually a big fragile mess that a developer is hesitant to get involved with!</li>
            </ul>
        </div>
        <br />
        <h2>Conclusion</h2>
        <p>Yes! CMS are a great addition to a developers toolkit, but its important that a developer knows when and where to use them as using the wrong tool for the job can lead to further scalability issues down the line.</p>

        <br />
        <h3>References:</h3>
        <i>https://w3techs.com/technologies/details/cm-wordpress/all/all</i>
        <div className={styles.shareIcons}>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A3000/blogPost/0&title=&summary=&source="><FontAwesomeIcon className={styles.icon} size="3x" icon={faLinkedin} /></a>
          <a href="https://twitter.com/home?status=http%3A//localhost%3A3000/blogPost/0"><FontAwesomeIcon className={styles.icon} size="3x" icon={faTwitter} /></a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blogPost/0"><FontAwesomeIcon className={styles.icon} size="3x" icon={faFacebook} /></a>
        </div>
    </div>
  )};
