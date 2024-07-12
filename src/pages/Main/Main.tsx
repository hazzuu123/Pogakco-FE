import { useEffect, useState } from "react";
import CircleButton from "@/components/buttons/CircleButton";
import { IoMdAdd } from "react-icons/io";
import { IroomCardData, TRoomType } from "@/models/room.model";
import { MainStyle } from "./MainStyle";
import Modal from "@/components/modal/Modal";
import ModalRoomCreate from "@/components/modal/modalContents/ModalRoomCreate";
import ModalRoomDetail from "@/components/modal/modalContents/ModalRoomDetail";
import useModal from "@/hooks/useModal";
import useFetchRooms from "@/hooks/queries/useFetchRooms";
import Pagination from "@/components/pagination/Paginiation";
import { useSearchParams } from "react-router-dom";
import MainSlider from "@/components/slider/Slider";
import { useAuthStore } from "@/store/authStore";
import RoomList from "./RoomList";

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [selectedRoom, setSelectedRoom] = useState<IroomCardData | null>(null);
  const { isModal, modalContent, openModal, closeModal, setIsModal } = useModal();
  const isLoggedIn = useAuthStore<boolean>((state) => state.isLoggedIn);
  const newSearchParams = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || "1";
  const roomType: TRoomType = (searchParams.get("roomType") as TRoomType) || "all";
  const { data: response, isLoading, error, refetch } = useFetchRooms(page, isRunning, roomType);

  const roomListDatas = response?.data ?? [];
  const pagination = response?.pagination ?? null;

  useEffect(() => {
    if (roomType === "myRoom" && !isLoggedIn) return;
    refetch();
  }, [searchParams, isRunning, roomType]);

  const handleCheckboxChange = () => {
    setIsRunning(!isRunning);
  };

  const handleRoomTypeChange = (type: TRoomType) => () => {
    if (type === "all") {
      newSearchParams.delete("roomType");
    } else {
      newSearchParams.set("roomType", type);
    }
    const pageValue = newSearchParams.get("page");
    newSearchParams.delete("page");
    if (pageValue) {
      newSearchParams.set("page", "1");
    }
    setSearchParams(newSearchParams);
  };

  const handleRoomCardClick = (roomData: IroomCardData) => {
    setSelectedRoom(roomData);
    openModal("detail");
  };

  const handleCreateButtonClick = () => {
    openModal("create");
  };

  if (error) throw error;

  return (
    <>
      {isModal && (
        <Modal setIsModal={setIsModal} onClose={closeModal}>
          {modalContent === "detail" && selectedRoom && (
            <ModalRoomDetail roomData={selectedRoom} />
          )}
          {modalContent === "create" && <ModalRoomCreate />}
        </Modal>
      )}
      <MainSlider />
      <MainStyle>
        <div className="mainContents">
          <h1 className="title">#뽀모도로 친구들</h1>
          <div className="buttonGroup">
            <button
              onClick={handleRoomTypeChange("all")}
              className={`button ${roomType === "all" ? "active" : ""}`}
            >
              전체 방
            </button>
            <button
              onClick={handleRoomTypeChange("myRoom")}
              className={`button ${roomType === "myRoom" ? "active" : ""}`}
            >
              참여한 방
            </button>
          </div>
          <div className={`options ${isRunning ? "" : "checked"}`}>
            <input
              type="checkbox"
              checked={!isRunning}
              onChange={handleCheckboxChange}
            />
            <div onClick={handleCheckboxChange}>휴식중인 방만 보기</div>
          </div>
          <RoomList
            roomListDatas={roomListDatas}
            handleRoomCardClick={handleRoomCardClick}
            isLoading={isLoading}
            roomType={roomType}
            isLoggedIn={isLoggedIn}
          />
          {pagination && <Pagination pagination={pagination} />}
        </div>
        <div className="createButton" onClick={handleCreateButtonClick}>
          <CircleButton buttonColor="active" buttonSize="large">
            <IoMdAdd />
          </CircleButton>
        </div>
      </MainStyle>
    </>
  );
};

export default Main;
