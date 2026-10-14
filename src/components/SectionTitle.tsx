export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 mb-0">{title}</h1>
      <hr className="w-25 mx-auto bg-primary" />
    </div>
  )
}
