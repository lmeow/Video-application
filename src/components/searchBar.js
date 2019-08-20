import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = event => setSearchTerm(event.target.value);

	const onKeyPress = event => {
		if (event.key === "Enter") {
			onFormSubmit(searchTerm);
		}
	};

	return (
		<Paper elevation={8} style={{ padding: "25px" }}>
			<TextField
				fullWidth
				label="Search..."
				onChange={handleChange}
				onKeyPress={onKeyPress}
			></TextField>
		</Paper>
	);
};

export default SearchBar;
