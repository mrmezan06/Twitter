import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="Lives in"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationshipStatus"
            placeholder="Relationship status"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button info-button">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
