import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3/Step3";
import { fetchPlayerList } from "apis/player";
import { addUpdateTraining } from "apis/training";
import history from "historyObj"
import showHideNotification from "components/showHideNotification";
import { trainings } from "services/trainings/mock";

const day = 60*60*24*1000;

const NewTrainingBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  top: 6rem;
  position: absolute;
  float: left;
  width: 100%;
`;

const NewTrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  margin: 0 auto;
  width: 75%;
  padding: 30px;
  max-height: calc(100vh - 11rem);
`;

const NewTraining = (props) => {
  const [trainingData, setTrainingData] = useState({
    name: "",
    date: "",
    time: "",
    players: [],
    drills: [],
  });
  const [playersList, setPlayersList] = useState([]);
  const [playersCount, setPlayersCount] = useState(0);

  useEffect(() => {
    setPlayersCount(0);
    setPlayersList([]);
    fetchPlayerList({
      page: 1,
      filter: JSON.stringify({}),
      limit: 20,
      sort: JSON.stringify({}),
      myAcademy: true,
    })
      .then((data) => {
        if (data.sc && data.result) {
          setPlayersCount(data.result.count);
          setPlayersList(
            data.result.data && data.result.data.length ? data.result.data : []
          );
        }
      })
      .catch(() => {});
  }, []);

  async function saveTraining() {
   const result=  await addUpdateTraining({...trainingData,date:trainingData.date.split("-").reverse().join("/")});
    if(result){
      history.push("/academies/training/list")
    }
  }

  function onChangeValues(key, value) {
    if(key=="date"){
      if(value<new Date(new Date().getTime()+day).toLocaleDateString().split("/").reverse().join("-")){
        showHideNotification("Date should be of future", "danger");
return;
      }
    }
    key = key.split(".");
    let temp = trainingData;
    for (let i = 0; i < key.length - 1; i++) {
      temp = temp[key[i]];
    }
    temp[key[key.length - 1]] = value;
    setTrainingData({ ...trainingData });
    console.log(key, value)
  }
  return (
    <NewTrainingBody>
      <NewTrainingContainer>
        {props.step === 1 && (
          <Step1
            toggleStep={props.toggleStep}
            trainingData={trainingData}
            onChange={onChangeValues}
          />
        )}
        {props.step === 2 && (
          <Step2
            toggleStep={props.toggleStep}
            trainingData={trainingData}
            onChange={onChangeValues}
            playersList={playersList}
          />
        )}
        {props.step === 3 && (
          <Step3
            toggleStep={props.toggleStep}
            trainingData={trainingData}
            onChange={onChangeValues}
            saveTraining={saveTraining}
          />
        )}
      </NewTrainingContainer>
    </NewTrainingBody>
  );
};

export default NewTraining;
