import { Component } from "solid-js";
import { Passenger } from "../../business-logic/models/Passenger";
import {
  selectedPassenger,
  setSelectedPassenger,
} from "../state/selectedPassenger";
import "./PassportCard.css";

export const PassportCard: Component<{ passenger: Passenger }> = (props) => {
  return (
    <div
      class="passport-card"
      classList={{
        selected: selectedPassenger() === props.passenger,
      }}
      on:click={() => setSelectedPassenger(props.passenger)}
    >
      <div class="passport-header">
        <span>PASSPORT</span>
        <span>ID-2048</span>
      </div>

      <div class="passport-body">
        <div class="passport-photo">
          <img src={props.passenger.avatar} alt="Passenger avatar" />
        </div>

        <div class="passport-info">
          <div class="passport-name">{props.passenger.name}</div>
          <div class="passport-meta">Age: ${props.passenger.age}</div>
          <div class="passport-desc">Description</div>
        </div>
      </div>
    </div>
  );
};
