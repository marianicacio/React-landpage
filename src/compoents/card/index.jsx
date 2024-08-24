import "./style.css"

export default function Card({ title, description, image, imageAlt }) {
    return (
        <main>
            <div className="card">
                <img src={image} alt={imageAlt} />
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </main>
    )
}
