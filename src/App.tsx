import { Navbar } from "@/components/Navbar";
import { Modal } from "@/components/Modal";
import { useModal } from "./hooks";

function App() {
  const modal = useModal();

  return (
    <>
      <Navbar />

      <button
        onClick={modal.open}
        className="fixed top-20 right-5 border px-4 py-1.5 rounded-md"
      >
        open modal
      </button>

      <Modal modalTitle="New Task" isOpen={modal.state} onClose={modal.close}>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
}

export default App;
