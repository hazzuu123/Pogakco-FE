import { Participant } from '@/models/timer.model';
import React, { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client';

const useEmitSocket = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [syncedIsRunning, setSyncedIsRunning] = useState<boolean | null>(null);
    const [syncedStartedAt, setSyncedStartedAt] = useState<string | null>(null);
    const [syncedCurrentCycles, setSyncedCurrentCycles] = useState<number | null>(
      null
    );
    const [syncedAllParticipants, setSyncedAllParticipants] = useState<
      Participant[] | null
    >(null);
  
    const handleClickCyclesStartButton = () => {
      if (!socket) return;
      socket.emit("start-cycles");
    };
  
    useEffect(() => {
      const roomId = location.pathname.match(/\/rooms\/(\d+)/)![1];
      const socket = io(`http://localhost:3000/rooms/${roomId}`, {
        withCredentials: true,
      });
      setSocket(socket);
      console.log('소켓 연결 성공', socket)
  
      const onSyncedIsRunning = (isRunning: boolean) => {
        setSyncedIsRunning(isRunning);
      };
      const onSyncedStartedAt = (startedAt: string) => {
        setSyncedStartedAt(startedAt);
      };
      const onSyncedCurrentCycles = (currentCycles: number) => {
        setSyncedCurrentCycles(currentCycles);
      };
      const onSyncedAllParticipants = (allParticipants: Participant[]) => {
        setSyncedAllParticipants(allParticipants);
      };
      socket.on("sync-is-running", onSyncedIsRunning); // 휴식/집중 여부, 시작버튼 누르면 & 전체 사이클 끝나면 동기화
      socket.on("sync-started-at", onSyncedStartedAt); // 타이머 시작 시각, 시작버튼 누르면 동기화
      socket.on("sync-current-cycles", onSyncedCurrentCycles); // 전체중 몇 뽀모도로 완료했는지, 1뽀모도로 할때마다 동기화
      socket.on("sync-all-participants", onSyncedAllParticipants); // 참여중인 유저 정보, 1뽀모도로 할때마다 동기화
  
      return () => {
        socket.disconnect();
      };
    }, []);

    return {syncedIsRunning, syncedAllParticipants, syncedCurrentCycles, syncedStartedAt, handleClickCyclesStartButton}
}

export default useEmitSocket