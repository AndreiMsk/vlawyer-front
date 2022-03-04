import AdminLayout from "layouts/admin";

const Chat = () => {
    return <div>Chat</div>
}

Chat.getLayout = function getLayout(page) {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
  }

export default Chat;