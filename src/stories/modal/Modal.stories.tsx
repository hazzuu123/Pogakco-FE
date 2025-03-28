import Modal from "@/components/modal/Modal";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    isRecheckType: {
      control: "boolean"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        {isOpen && (
          <Modal setIsModal={setIsOpen} onClose={() => setIsOpen(false)}>
            <div
              style={{
                padding: "20px",
                background: "white",
                borderRadius: "8px"
              }}
            ></div>
          </Modal>
        )}
      </>
    );
  }
};

export const RecheckModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        {isOpen && (
          <Modal
            setIsModal={setIsOpen}
            onClose={() => setIsOpen(false)}
            isRecheckType={true}
          >
            <div
              style={{
                padding: "20px",
                background: "white",
                borderRadius: "8px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-end",
                  marginTop: "20px"
                }}
              >
                <button onClick={() => setIsOpen(false)}>머무르기</button>
                <button onClick={() => setIsOpen(false)}>그룹 나가기</button>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
};
