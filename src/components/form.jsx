import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

function form() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleClick = () => {
        alert("Data Disimpan")
    };

    const [selectedDateTime, setSelectedDateTime] = useState(null);

    return (
        <div className="background">
            <div className="rectangle-1">
                <h1 className="text-1">TO DO LIST</h1>
                <div className="rectangle-2">
                    <h2 className="text-2">Add new to do :
                        <label className="input-label">Nama :
                            <input className="input-box" id="name" placeholder="nama"/>
                        </label>
                        <label className="input-label">Deskripsi :
                            <textarea rows="5" cols="30" className="input-box" id="description" placeholder="deskripsi"/>
                        </label>
                        <label className="input-label">Kategori :
                            <input className="input-box" id="category" placeholder="kategori"/>
                        </label>
                        <label htmlFor="dropdown" className="input-label">Prioritas :
                            <select
                                id="dropdown"
                                className="dropdown"
                                value={selectedOption}
                                onChange={handleChange}>
                                    <option className="dropdown" value="">--Pilih--</option>
                                    <option className="dropdown" value="option1">Opsi 1</option>
                                    <option className="dropdown" value="option2">Opsi 2</option>
                                    <option className="dropdown" value="option3">Opsi 3</option>
                            </select>
                        </label>
                    </h2>
                    <h3 className="text-3">Date and Time :
                    <DatePicker
                        selected={selectedDateTime}
                        onChange={(date) => setSelectedDateTime(date)}
                        showTimeSelect
                        dateFormat="dd/MM/yyyy, h:mm aa"
                        timeFormat="HH:mm"
                        timeIntervals={15} 
                        className="datepicker-input"
                    />
                    <button className="button-save" onClick={handleClick}>Simpan</button>
                    <button className="button-cancel" onClick={handleClick}>Batal</button>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default form;