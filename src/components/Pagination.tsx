import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <View style={styles.container}>
      {currentPage > 1 && (
        <TouchableOpacity style={styles.button} onPress={() => onPageChange(currentPage - 1)}>
          <Text style={styles.text}>Trước</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.text}>{currentPage} / {totalPages}</Text>

      {currentPage < totalPages && (
        <TouchableOpacity style={styles.button} onPress={() => onPageChange(currentPage + 1)}>
          <Text style={styles.text}>Tiếp</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  button: { padding: 10, backgroundColor: "#007bff", borderRadius: 5, marginHorizontal: 5 },
  text: { color: "white", fontWeight: "bold" },
});
