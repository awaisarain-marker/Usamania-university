'use client';

import React from 'react';
import Link from 'next/link';
// Import shared BlogSection
import BlogSection from '@/components/home/BlogSection';

export default function BusinessAdminBlogPage() {
    return (
        <div className="single-post-page">
            <section className="single-post__hero">
                <div className="single-post__container">
                    <div className="single-post__heading text-center">
                        <nav className="breadcrumbs">
                            <Link href="/" className="breadcrumbs__item text-small">
                                <span>Home</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <Link href="/uit-today" className="breadcrumbs__link text-small">
                                <span>UIT University Today</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <Link href="/uit-today/category/academics" className="breadcrumbs__link text-small">
                                <span>Academics</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <span className="breadcrumbs__link text-bold text-small">
                                <span>
                                    The Political Imperative: Surviving and Thriving in Power Dynamics at Work
                                </span>
                            </span>
                        </nav>
                        <div className="page-title">
                            <h1 className="text-blue">The Political Imperative: Surviving and Thriving in Power Dynamics at Work</h1>
                        </div>
                        <div className="single-post__heading-tags">
                            <span>December 15, 2025</span>
                            <span> Micheal Stratton </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="single-post__wrap">
                <aside className="sidebar --fixed">
                    {/* Sticky Social */}
                    <div className="addtoany_shortcode">
                        <div className="a2a_kit a2a_kit_size_56 addtoany_list" data-a2a-url="https://www.aubg.edu/aubg-today/the-political-imperative-surviving-and-thriving-in-power-dynamics-at-work/" data-a2a-title="The Political Imperative: Surviving and Thriving in Power Dynamics at Work" style={{ lineHeight: '56px' }}>
                            <a className="a2a_button_facebook" href="/#facebook" title="Facebook" rel="nofollow noopener" target="_blank">
                                <span className="a2a_svg a2a_s__default a2a_s_facebook" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#fff" d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"></path>
                                    </svg>
                                </span>
                                <span className="a2a_label">Facebook</span>
                            </a>
                            <a className="a2a_button_twitter" href="/#twitter" title="Twitter" rel="nofollow noopener" target="_blank">
                                <span className="a2a_svg a2a_s__default a2a_s_twitter" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#FFF" d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z"></path>
                                    </svg>
                                </span>
                                <span className="a2a_label">Twitter</span>
                            </a>
                            <a className="a2a_button_email" href="/#email" title="Email" rel="nofollow noopener" target="_blank">
                                <span className="a2a_svg a2a_s__default a2a_s_email" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#fff" d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z"></path>
                                    </svg>
                                </span>
                                <span className="a2a_label">Email</span>
                            </a>
                            <a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share#url=https%3A%2F%2Fwww.aubg.edu%2Faubg-today%2Fthe-political-imperative-surviving-and-thriving-in-power-dynamics-at-work%2F&amp;title=The%20Political%20Imperative%3A%20Surviving%20and%20Thriving%20in%20Power%20Dynamics%20at%20Work">
                                <span className="a2a_svg a2a_s__default a2a_s_a2a" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g fill="#FFF">
                                            <path d="M14 7h4v18h-4z"></path>
                                            <path d="M7 14h18v4H7z"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span className="a2a_label a2a_localize" data-a2a-localize="inner,Share">Share</span>
                            </a>
                        </div>
                    </div>
                </aside>

                <div className="container">
                    <div className="single-post__featured">
                        <figure className="image-wrap">
                            <img
                                className="image lazy loaded"
                                alt="The Political Imperative: Surviving and Thriving in Power Dynamics at Work"
                                width="1200"
                                height="780"
                                data-ll-status="loaded"
                                sizes="(min-width: 75rem) 60rem, (min-width: 50rem) 40rem, (min-width: 40rem) calc(100vw - 10rem), 100vw"
                                srcSet="https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-300x195.png 150w, https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-768x499.png 300w, https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-1024x666.png 600w, https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture.png 1000w"
                                src="https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture.png"
                            />
                        </figure>
                    </div>

                    <div className="single-post__content-wrap">
                        <article id="post-87572" className="single-post__content post-87572 post type-post status-publish format-standard has-post-thumbnail hentry category-academics category-executive-mba category-faculty tag-aubg-executive-mba tag-aubg-faculty tag-aubg-thought-leadership">
                            <p data-start="365" data-end="517"><em data-start="446" data-end="517">By <a href="https://www.aubg.edu/professors/stratton-micheal/?region=bulgaria">Micheal Stratton</a>, Professor of Management at the American University in Bulgaria</em></p>
                            <p>When I recently spoke with employers, AUBG alumni, and Executive MBA students about power dynamics at work, I began with a simple question: What’s the first word that comes to mind when you hear the words “power” and “politics”? The reactions in the room were telling and familiar.</p>
                            <p>We see organizational politics in our everyday lives, but it’s often viewed with a negative connotation. Many of us wouldn’t even want to acknowledge our skills in this area of management and leadership in our CVs.</p>
                            <p>The challenge, then, is not whether power and politics exist, but whether we are willing to engage with them consciously. That requires reframing them as skills to be learned, not flaws to be denied.</p>

                            <section className="post-gallery">
                                <div className="post-gallery__image --half">
                                    <figure className="image-wrap">
                                        <img decoding="async" loading="lazy" src="https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-4.png" alt="AUBG Professor Micheal Stratton Giving an Executive MBA Lecture on Power Dynamics at the Workplace" width="1200" height="780" />
                                    </figure>
                                    <div className="text-small">
                                        <p className="post-gallery__text"></p>
                                    </div>
                                </div>

                                <div className="post-gallery__image --half">
                                    <figure className="image-wrap">
                                        <img decoding="async" loading="lazy" src="https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-5.png" alt="AUBG Professor Micheal Stratton Giving an Executive MBA Lecture on Power Dynamics at the Workplace" width="1200" height="780" />
                                    </figure>
                                    <div className="text-small">
                                        <p className="post-gallery__text"></p>
                                    </div>
                                </div>
                            </section>

                            <h2>The last dirty word</h2>
                            <p>Rosabeth Moss Kanter, a retired Harvard professor, once said, “Power is America’s last dirty word. It is easier to talk about money – and much easier to talk about sex – than it is to talk about power.”</p>
                            <p>Kanter’s observation (1979) rings as true today as it did over four decades ago. People who have power often deny it; those who want it try not to appear hungry for it; and those who engage in it try to do it carefully and secretly (other than the narcissists and bullies who want nothing but control).</p>
                            <p>So why do we tend to avoid it and how does that avoidance manifest? I believe we can outline several reasons for that. First, many of us see politics as dangerous, posing a risk to our reputation, credibility, or safety at work. Second, we dismiss it as game play, a distraction from “real work.” For some, denying such politicking is a badge of honor. Third, we fear that political behavior is inherently unethical, associated with self-gain, backstabbing, or favoritism. And finally, many hold onto the belief that “my work should speak for itself,” and that engaging in politics would somehow tarnish a high-performance image.</p>
                            <p>At its core, organizational politics is simply our effort to influence decision-making and protect our agenda. Everyday actions, such as “taking something offline” with a boss, pitching ideas before a meeting, or “just having a chat” with someone who can help, are all political activities. Power play is everywhere.</p>
                            <p>So let me say the quiet part out loud: we need to learn how to navigate power dynamics, and how to advance our agendas responsibly. I argue that we should both acknowledge it and embrace it – but carefully and with a strategic mindset.</p>

                            <h2>Get in the game, but be prepared</h2>
                            <p>Power play can feel scary and intimidating, but it can also be freeing – it allows us to enact positive change and open new opportunities. Yet many of us have a visceral reaction to power and politics, seeing them as “cringe,” manipulative, or self-serving, often because we’ve witnessed destructive behavior.</p>
                            <p>But when we dismiss politics as inherently negative, we ignore how organizations really function. This has serious consequences. When you avoid building relationships strategically or when you believe your work should “speak for itself,” you’re not avoiding politics – you’re simply ceding influence to others who may know the vital importance of building political capital.</p>
                            <p>In reality, everyday constructive actions are political: meeting stakeholders for coffee before a presentation, joining cross-functional projects to build relationships, or advocating for resources by aligning your request with organizational priorities. <a href="https://www.cambridge.org/core/journals/journal-of-management-and-organization/article/promoting-career-growth-potential-political-skill-the-acquisition-of-social-resources-and-ingratiation/A3C6D9332CE244F22F5D81DC766AEAA2">Research shows</a> that individuals with political skills, such as social astuteness, audience adaptation, sincerity, and networking, earn higher evaluations, promotions, and satisfaction. Also, leaders with strong political skills have more effective teams. These leaders use their savvy to network, build alliances, and garner resources for their team and organization – this ensures teams have the support and resources needed to perform.</p>
                            <p>So yes, there is real benefit in learning how to engage. But we must proceed with intention. Political behavior requires significant cognitive and emotional resources – we must read social cues, anticipate reactions, manage our own emotional responses, and try to influence while still performing our actual job duties. This emotional labor is particularly exhausting, especially for underrepresented professionals who face double standards and biased perceptions. This burden is real, and avoiding politics doesn’t reduce it; in fact, it often increases it. Without political capital, you have less influence, fewer allies, and reduced control over your environment.</p>

                            <section className="post-gallery">
                                <div className="post-gallery__image --half">
                                    <figure className="image-wrap">
                                        <img decoding="async" loading="lazy" src="https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-3.png" alt="AUBG Professor Micheal Stratton Giving an Executive MBA Lecture on Power Dynamics at the Workplace" width="1200" height="780" />
                                    </figure>
                                    <div className="text-small">
                                        <p className="post-gallery__text"></p>
                                    </div>
                                </div>

                                <div className="post-gallery__image --half">
                                    <figure className="image-wrap">
                                        <img decoding="async" loading="lazy" src="https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-2.png" alt="AUBG Professor Micheal Stratton Giving an Executive MBA Lecture on Power Dynamics at the Workplace" width="1200" height="780" />
                                    </figure>
                                    <div className="text-small">
                                        <p className="post-gallery__text"></p>
                                    </div>
                                </div>
                            </section>

                            <h2>Building your power base</h2>
                            <p>If we’re going to get in the game, we need power. That’s the ability to influence behavior, decisions, and outcomes. Power isn’t only structural or tied to title; it also comes from our location, relationships, expertise, and reputation. Some of it is baked into our roles, but much of it is built through our actions. We have agency.</p>
                            <p>Consider a Director of Product Development at a mid-sized tech company deciding whether to adopt a new platform. While they hold formal authority to make the final decision, authority alone isn’t enough to secure buy-in. To move the organization forward, they must also draw on reward power to incentivize early adopters, expert power to establish credibility around the technology’s limitations, and informational power through competitive data others don’t have access to.</p>
                            <p>The genius lies not in relying on any single power source, but in knowing when and how to deploy each one. The most sophisticated leaders make their exercise of power feel so natural that people don’t realize they’re being influenced – they just know they want to follow.</p>
                            <h3>Politics from below</h3>
                            <p>Not everyone has Sarah’s positional authority, yet the lower-level employees often wield significant informal power despite lacking formal authority. Administrative assistants, long-serving staff, and technical experts often control access to people, information, and resources – a form of influence that scholars Robert Brower and Mitch Abolafia describe as “politics from below”. Influence can come from being indispensable, from gatekeeping, or from occupying a central location in a network.</p>
                            <p>This is the Consigliere Principle: In <em>The Godfather</em>, one of the most powerful characters isn’t the Don – it’s Tom Hagen, the Consigliere. He’s the advisor who acts as the mouth of the Don, commands huge respect, but isn’t directly involved in operations. Why does Tom have so much power? Because of his location. He’s positioned between the leader and everyone else. He has access, he has the leader’s ear, and he controls information flow.</p>
                            <p>Your “location” in the organization, formal or informal, determines your influence, and its value shifts as priorities and leaders change. The strategic question becomes: Are you positioning yourself where influence flows?</p>
                            <h3>Expanding your relational capital</h3>
                            <p>Our success at constructing a power base depends greatly on our ability to cultivate and foster mutually beneficial relationships. That’s what constitutes our relational capital – the goodwill created when we follow through, support colleagues, and show genuine interest in others’ success. This increases your likelihood of expanding your influence and advancing your agenda.</p>
                            <p>Sadly, “<em>hard work will speak for itself is a myth,”</em> says Jeff Pfeffer, an organizational behaviorist at Stanford and an expert on organizational politics. We know from Pfeffer’s research, and from others in the field, that the boss-subordinate relationship often matters more than actual performance in evaluation outcomes. Bosses promote people they trust, depend on, and feel connected to. Even small gestures, such as seeking advice, acknowledging leadership moments, and demonstrating loyalty, strengthen that bond. Your achievements reflect their judgement and decisions in the past, so you’re more likely to be “seen” and validated, and in many cases, promoted. Your promotion is a reflection on them.</p>
                            <p>Ask yourself: Have you built a dependable reputation? Do you make your boss’s life easier or harder? Are you someone who proactively solves problems or someone who creates stress? As Mark Cuban puts it, indispensable employees reduce stress by anticipating issues before they escalate.</p>
                            <p>Relational capital gives you influence, access, and permission to lead. Without it, even great ideas struggle to find traction.</p>
                            <h2>Navigating the power terrain</h2>
                            <p>Understanding power is necessary, but it’s insufficient without knowing context. As you build influence, you must understand the political terrain where power operates.</p>
                            <p>Consider the ancient wisdom that has guided leaders for millennia. Sun Tzu wrote in The Art of War: “If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.”</p>
                            <p>While written for military strategy, this principle applies directly to all organizational contexts. Understanding the political terrain and your position within it isn’t optional; it’s fundamental to survival and success.</p>
                            <p>A simple political analysis starts with four questions:</p>
                            <ol>
                                <li>Who are the players?</li>
                                <li>What are their power sources?</li>
                                <li>What do they want and value, and how does your agenda align with organizational priorities?</li>
                                <li>What resources – information, budget, space, technology, time – are at stake?</li>
                            </ol>
                            <p>These questions clarify the difference between strategy (what you want) and tactics (how you pursue it).</p>
                            <p>As I often remind leaders: the most influential people you’ve encountered were almost certainly adept at mapping the political landscape and acting with intention within it.</p>
                            <h2>Mapping your power</h2>
                            <p>Developing political acumen requires more than passive learning – it demands reflection and honest self-assessment. I ask my students to complete structured journal entries that mirror these frameworks. They begin by examining their personal power path, identifying the attributes, skills, and abilities that make them effective, and mapping these against the power bases we discuss. Later, they analyze their networks to understand where their alliances support their goals and where gaps exist. Students who fully engage in this process consistently report that it reshapes how they see themselves as professionals and leaders.</p>
                            <p>If there is one takeaway, it is this: don’t treat power and politics as concepts – map them in your own life. Assess your power base, your relational capital, and the specific actions that will help you build influence authentically. You will make mistakes – we all do. The key is to learn from them, maintain your ethical center, and actively shape the political dynamics around you rather than passively accepting them.</p>
                            <p>Politics is not a “dirty word.” It is simply how organized human activity gets done. Power is not something to avoid – it is something to build and use wisely. And political skill is not manipulation – it is an essential professional competence.</p>
                            <p>&nbsp;</p>
                            <p><strong>Sources and further reading:</strong></p>
                            <p style={{ fontWeight: 400 }}>Ahearn, K. K., Ferris, G. R., Hochwarter, W. A., Douglas, C., &amp; Ammeter, A. P. (2004). Leader political skill and team performance. <em>Journal of Management, 30</em>(3), 309-327. <a href="https://doi.org/10.1016/j.jm.2003.01.004">https://doi.org/10.1016/j.jm.2003.01.004</a></p>
                            <p>Brower, R. S., &amp; Abolafia, M. Y. (1997). Bureaucratic politics: The view from below. <em>Journal of Public Administration Research and Theory</em>, <em>7</em>(2), 305-332.</p>
                            <p>Ferris, G. R., Treadway, D. C., Perrewé, P. L., Brouer, R. L., Douglas, C., &amp; Lux, S. (2007). Political skill in organizations. <em>Journal of Management</em>, <em>33</em>(3), 290-320. <a href="https://doi.org/10.1177/0149206307300813">https://doi.org/10.1177/0149206307300813</a></p>
                            <p>Kanter, R. M. (1979). Power failure in management circuits. <i>Harvard Business Review</i>, 57(4), 65-75.</p>
                            <p style={{ fontWeight: 400 }}>Grandey, A. A., Houston, L., &amp; Avery, D. R. (2019). Fake it to make it? Emotional labor reduces the racial disparity in service performance judgments. <em>Journal of Management, 46</em>(6), 1063-1089. <a href="https://doi.org/10.1177/0149206318757019">https://doi.org/10.1177/0149206318757019</a></p>
                            <p style={{ fontWeight: 400 }}>Haden, J. (2025, January 24). Mark Cuban says the best employees are smart, driven, and curious. But 1 skill matters much more (and makes them invaluable). <em>Inc.</em> <a href="https://www.inc.com/jeff-haden/mark-cuban-says-best-employees-are-smart-driven-curious-but-1-skill-matters-much-more-and-makes-them-invaluable.html">https://www.inc.com/jeff-haden/mark-cuban-says-best-employees-are-smart-driven-curious-but-1-skill-matters-much-more-and-makes-them-invaluable.html</a></p>
                            <p style={{ fontWeight: 400 }}>Munyon, T. P., Summers, J. K., Thompson, K. M., &amp; Ferris, G. R. (2015). Political skill and work outcomes: A theoretical extension, meta-analytic investigation, and agenda for the future. <em>Personnel Psychology, 68</em>(1), 143-184.</p>
                            <p>Pfeffer, J. (2010). <em>Power: Why some people have it and others don’t</em>. Harper Business</p>
                            <p>Rivera, A. E., Rivera-González, G., Escamilla-García, P. E., &amp; Carrillo Gamboa, J. (2025). Exploring the mystery of relational capital in an organizational context. <em>Administrative Sciences</em>, <em>15</em>(2), 49. <a href="https://doi.org/10.3390/admsci15020049">https://doi.org/10.3390/admsci15020049</a></p>
                            <p>Sibunruang, H., &amp; Kawai, N. (2023). Promoting career growth potential: political skill, the acquisition of social resources and ingratiation. <i>Journal of Management &amp; Organization</i>, <i>29</i>(2), 227–246. <a href="https://doi.org/10.1017/jmo.2021.25">https://doi.org/10.1017/jmo.2021.25</a></p>
                            <p>Sun Tzu. (2005). <em>The art of war</em> (L. Giles, Trans.). Project Gutenberg. (Original work published ca. 5th century BCE)</p>

                            <div className="single-post__tags">
                                <p className="text-small text-grey">Tags:</p>
                                <a href="https://www.aubg.edu/aubg-today/tag/aubg-executive-mba/?region=usa" className="single-post__tag">AUBG Executive MBA</a>
                                <a href="https://www.aubg.edu/aubg-today/tag/aubg-faculty/?region=usa" className="single-post__tag">AUBG faculty</a>
                                <a href="https://www.aubg.edu/aubg-today/tag/aubg-thought-leadership/?region=usa" className="single-post__tag">AUBG Thought Leadership</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            {/* Related Stories using the shared component */}
            <BlogSection title="Related Stories" />
        </div>
    );
}
