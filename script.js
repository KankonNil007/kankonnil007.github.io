/**
 * Kankon Mondal - Portfolio JavaScript Logic
 * - Mobile Navigation Toggle
 * - Sticky Header with Glass Blur
 * - Dynamic GitHub Stats with Animated Counter
 * - Dynamic Auto-updating Copyright Year
 * - Project Category Filtering (Projects Page)
 * - Typing Effect
 * - Scroll Reveal Animations
 * - Contact Form Handler with FormSubmit & Mailto Fallback
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. Mobile Navigation & Sticky Header
    // ---------------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            const isExpanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Sticky Navbar Scroll Listener
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.background = 'rgba(6, 9, 16, 0.95)';
                navbar.style.padding = '14px 0';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
            } else {
                navbar.style.background = 'rgba(8, 12, 20, 0.85)';
                navbar.style.padding = '18px 0';
                navbar.style.boxShadow = 'none';
            }
        }, { passive: true });
    }

    // ---------------------------------------------------------
    // 2. Dynamic Auto-Updating Copyright Year
    // ---------------------------------------------------------
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year, #current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // ---------------------------------------------------------
    // 3. Dynamic GitHub Stats Fetcher & Animated Counter
    // ---------------------------------------------------------
    const repoElements = document.querySelectorAll('.github-repos-count');
    const starElements = document.querySelectorAll('.github-stars-count');

    function animateValue(element, start, end, duration) {
        if (!element) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        };
        window.requestAnimationFrame(step);
    }

    async function fetchGitHubStats() {
        const defaultRepos = 15;
        const defaultStars = 36;

        try {
            const userResponse = await fetch('https://api.github.com/users/KankonNil007', {
                headers: { 'Accept': 'application/vnd.github.v3+json' }
            });

            let repoCount = defaultRepos;
            let starCount = defaultStars;

            if (userResponse.ok) {
                const userData = await userResponse.json();
                if (typeof userData.public_repos === 'number') {
                    repoCount = userData.public_repos;
                }

                // Fetch public repos to compute cumulative stars
                try {
                    const reposResponse = await fetch('https://api.github.com/users/KankonNil007/repos?per_page=100');
                    if (reposResponse.ok) {
                        const reposData = await reposResponse.json();
                        if (Array.isArray(reposData)) {
                            const calculatedStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
                            if (calculatedStars > 0) {
                                starCount = calculatedStars;
                            }
                        }
                    }
                } catch (e) {
                    console.log('GitHub stars calculation using default:', defaultStars);
                }
            }

            repoElements.forEach(el => animateValue(el, 0, repoCount, 1200));
            starElements.forEach(el => animateValue(el, 0, starCount, 1200));
        } catch (error) {
            // Graceful fallback to static verified metrics
            repoElements.forEach(el => el.textContent = defaultRepos);
            starElements.forEach(el => el.textContent = defaultStars);
        }
    }

    if (repoElements.length > 0 || starElements.length > 0) {
        fetchGitHubStats();
    }

    // ---------------------------------------------------------
    // 4. Typing Effect for Hero Subtitle
    // ---------------------------------------------------------
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
        const words = ['ECE Student', 'Python & C Developer', 'ML Explorer', 'Problem Solver'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 45;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 110;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2200; // Pause at word completion
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; // Pause before typing new word
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 800);
    }

    // ---------------------------------------------------------
    // 5. Project Category Filtering (Projects Page)
    // ---------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }

    // ---------------------------------------------------------
    // 6. Scroll Reveal Animations (Intersection Observer)
    // ---------------------------------------------------------
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .about-content, .skills-grid, .projects-grid, .contact-wrapper, .timeline, .cert-grid, .services-grid, .github-stats, .cta-banner');

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ---------------------------------------------------------
    // 7. Contact Form Handler (FormSubmit + Mailto Fallback)
    // ---------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const subjectInput = document.getElementById('contactSubject');
            const messageInput = document.getElementById('contactMessage');
            const submitBtn = document.getElementById('contactSubmitBtn');
            const responseDiv = document.getElementById('contactFormResponse');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !subject || !message) {
                showResponse('<i class="fa-solid fa-triangle-exclamation"></i> Please fill in all required fields.', 'error');
                return;
            }

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';
            responseDiv.style.display = 'none';

            try {
                const response = await fetch('https://formsubmit.co/ajax/kankonmondal89@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        _subject: `Portfolio Contact: ${subject}`,
                        message: message
                    })
                });

                if (response.ok) {
                    showResponse(`<i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`, 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Network error during form submission');
                }
            } catch (err) {
                // Fallback to mailto link
                const mailtoUrl = `mailto:kankonmondal89@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoUrl;
                showResponse(`<i class="fa-solid fa-envelope-open-text"></i> Opening your email client to complete sending your message... Thank you, ${name}!`, 'success');
                contactForm.reset();
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
            }

            function showResponse(msg, type) {
                responseDiv.innerHTML = msg;
                responseDiv.className = `form-response ${type}`;
                responseDiv.style.display = 'block';
            }
        });
    }
});
