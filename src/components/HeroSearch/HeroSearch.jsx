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
        <h3 className="text-bold text-center p-2">Shifokor qidirish</h3>
        <div className="d-flex justify-content-around hero-inp">
          <input
            fullWidth
            type="text"
            placeholder="Shifokor ismi"
            class="form-control hero-search-input my-3"
          />
          <FormControl className="hero-search-input my-3">
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
          <button className="btn btn-login my-3">Shifokorlarni qidirish</button>
        </div>
      </Container>
    </div>
  );
}
