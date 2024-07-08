import { useForm, SubmitHandler } from "react-hook-form";
import SquareButton from "@/components/buttons/SquareButton";
import InputField, { IInputField } from "@/components/inputField/InputField";
import { CgSandClock } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import { IoIosAlarm } from "react-icons/io";
import { ModalHeader, ModalRoomCreateStyle } from "../ModalStyle";
import { IcreateRoomForm } from "@/models/room.model";
import { createRoom } from "@/api/roomList.api";
import { useState } from "react";
import { CREATE_ROOM_REGEX } from "@/constants/regex";

const roomInfoInput: IInputField[] = [
  {
    name: "방 제목",
    field: "roomTitle",
  },
  {
    name: "상세 설명",
    field: "roomDescription",
  },
  {
    name: "수용 인원",
    field: "maxParticipants",
  }
];

const timerInfoInput: IInputField[] = [
  {
    icon: <FaBook />,
    name: "집중시간",
    field: "focusTime",
  },
  {
    icon: <CgSandClock />,
    name: "휴식시간",
    field: "shortBreakTime",
  },
  {
    icon: <IoIosAlarm />,
    name: "대 휴식",
    field: "longBreakTime",
  },
  {
    icon: <GiTomato />,
    name: "뽀모도로 사이클",
    field: "totalCycles",
  }
];

const ModalRoomCreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IcreateRoomForm>();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit: SubmitHandler<IcreateRoomForm> = (data) => {
    createRoom(data).then((response) => {
      console.log(response.data);
      setSubmitSuccess(true);
    }).catch((err) => {
      console.error(err);
      setSubmitSuccess(false);
    });
  };

  return (
    <ModalRoomCreateStyle>
      <ModalHeader>
        <h1>방 생성하기</h1>
        <hr />
      </ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">방 정보</div>
        {roomInfoInput.map((item, index) => (
          <div key={index}>
            <InputField
              inputfield={item}
              schema="auth"
              {...register(item.field as keyof IcreateRoomForm, { required: true, pattern: CREATE_ROOM_REGEX[item.field] })}
            />
            {errors[item.field as keyof IcreateRoomForm] && (
              <div className="help-message">필수 항목입니다.</div>
            )}
          </div>
        ))}
        <div className="title">타이머 정보</div>
        {timerInfoInput.map((item, index) => (
          <div key={index}>
            <InputField
              inputfield={item}
              schema="auth"
              {...register(item.field as keyof IcreateRoomForm, { required: true })}
            />
            {errors[item.field as keyof IcreateRoomForm] && (
              <div className="help-message">필수 항목입니다.</div>
            )}
          </div>
        ))}
        <div className="buttonContainer">
          <SquareButton buttonColor="active" buttonSize="medium" type="submit">
            생성하기
          </SquareButton>
        </div>
      </form>
    </ModalRoomCreateStyle>
  );
};

export default ModalRoomCreate;
