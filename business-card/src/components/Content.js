import EmailButton from "./EmailButton";

export default function Content() {
    return (
        <div className="content">
            <img className="content--photo" src="./images/gimhanul.png" alt="gimhanul" />
            <h1 className="content--name">Gim Hanul</h1>
            <p className="content--position">Backend Developer</p>
            <p className="content--web">gimhanul.me</p>
            <EmailButton />

            <section className="content--section">
                <h2 className="content--section--title">About</h2>
                <p className="content--section--content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="content--section--title">Interests</h2>
                <p className="content--section--content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </div>
    )
}