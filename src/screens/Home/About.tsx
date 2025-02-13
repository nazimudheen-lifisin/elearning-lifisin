import Container from '@components/Container'

function About() {
    return (

        <div>
            <Container>
                Best Online Courses
                Get Educated Online From Your Home
                At VirtualTech Academy, we make quality tech education accessible to everyone! Our platform connects passionate mentors with students and professionals eager to learn Artificial Intelligence, Cloud Technologies, Cybersecurity, and more—all at a comparatively lower price.
                Learn from Industry Experts – Gain knowledge from professionals who love to teach.
                Affordable & Flexible Learning – High-quality courses at a budget-friendly price.
                Learn Anytime, Anywhere – Study at your own pace from the comfort of your home.
                Start your learning journey with VirtualTech Academy and master the skills of the future!
                👉 Enroll Now!

                <hr />

                Best Online Learning Platform
                Welcome to VirtualTech Academy, where learning meets opportunity! Our platform bridges the gap between mentors who love to teach and earn and students & professionals eager to upskill in Artificial Intelligence, Cloud Technologies, Cybersecurity, and more—all at a comparatively lower price.
                Why Choose VirtualTech Academy?
                Affordable Learning – High-quality courses at budget-friendly rates. Expert Mentors – Learn from professionals with real-world experience.
                Flexible & Convenient – Study anytime, anywhere, at your own pace.
                Join VirtualTech Academy today and take the next step in your tech journey!

            </Container>

            <div className="h-24 bg-[#d1dfe0] flex px-5 py-3 mt-4 justify-between">
                <div className="flex flex-col justify-center text-left">
                    <p className='m-0 p-0 text-gray-700'>Enroll in expert-led tech courses to boost your skills.</p>
                    <span className='font-extrabold text-2xl'>Start learning today and level up your career</span>
                </div>
                <div className='bg-[#06BBCC] py-2 px-5 rounded-4xl cursor-pointer text-2xl font-semibold text-white flex items-center justify-center'>
                    Enroll Now
                </div>
            </div>
        </div>

    )
}

export default About