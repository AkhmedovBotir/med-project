import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function HeroSearch() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const optionValue = [
    {
      value: "aphasiologist",
      name: "Afaziolog",
    },
    {
      value: "dermatologist",
      name: "Dermatolog",
    },
    {
      value: "gynecologist",
      name: "Ginekolog",
    },
    {
      value: "neurologist",
      name: "Neurolog",
    },
    {
      value: "orthopedist",
      name: "Ortoped",
    },
    {
      value: "pediatrician",
      name: "Pediatrika",
    },
    {
      value: "psychiatrist",
      name: "Psixiatr",
    },
    {
      value: "psychologist",
      name: "Psixolog",
    },
  ];
  return (
    <div className="hero-search p-5">
      <Container>
        <h1 className="text-bold text-center p-2">SHIFOKOR QIDIRISH</h1>
        <div className="d-flex justify-content-around">
          <input
            fullWidth
            type="text"
            placeholder="Shifokor ismi"
            class="form-control hero-search-input"
          />
          <FormControl className="hero-search-input">
            <InputLabel id="demo-simple-select-label bg-light">
              Barcha mutaxassislar
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Barcha mutaxassislar"
              onChange={handleChange}
              className="bg-light"
            >
              {optionValue.map((item) => {
                return <MenuItem value={item.value}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <button className="btn btn-login">Shifokorlarni qidirish</button>
        </div>
      </Container>
    </div>
  );
}
