export default function Message({ sender, content }) {
  return (
    <div
      className={`p-2 rounded ${
        sender === "user" ? "bg-blue-100 text-right" : "bg-gray-200"
      }`}
    >
      <p>{content}</p>
    </div>
  );
}
