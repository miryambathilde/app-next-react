import Link from 'next/link'

export default function primerPost() {
    return (
        <div>
            <h1>Mi primer post</h1>
            <Link href="/">
                <a>Volver a inicio</a>
            </Link>
        </div>
    )
}
