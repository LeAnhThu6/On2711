// YourComponent.js

import React, { useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addData, editData, deleteData } from "../redux/actions";

const Screen01 = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [inputValue, setInputValue] = React.useState("");
  const generateUniqueId = () => {
    return data.length + 1; // This is a simple example; you may want to use a more robust method in a real-world application
  };
  const handleAddData = () => {
    // Implement logic để thêm dữ liệu mới từ input
    const newData = {
      name: inputValue,
      id: generateUniqueId(),
    };

    dispatch(addData(newData));
  };
  const handleEdit = (id, currentName) => {
    const newName = prompt("Nhập tên mới:", currentName);
    if (newName !== null) {
      const updatedData = {
        id: id,
        name: newName,
      };
      dispatch(editData(id, updatedData));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      dispatch(deleteData(id));
    }
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text>Screen01</Text>
      <TextInput
        onChangeText={(text) => setInputValue(text)}
        style={{ width: 200, height: 40, borderWidth: 1 }}
      />
      <Button title="Thêm" onPress={handleAddData} />
      {data.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Button title="Sửa" onPress={() => handleEdit(item.id, item.name)} />
          <Button title="Xóa" onPress={() => handleDelete(item.id)} />
        </View>
      ))}
    </View>
  );
};

export default Screen01;
