import React, { useState } from "react";
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import { useBooks } from "../../hooks/useBook";
import Pagination from "../../components/Pagination";
import { FilterParams } from "../../models/book";
const HomeScreen = () => {
  const { books, loading, error, pagination, fetchBooks } = useBooks();
  const [filters, setFilters] = useState<FilterParams>({
    title: "",
    minPrice: 0,
    maxPrice: 10000,
    publisher: "",
  });

  const handleSearch = () => {
    fetchBooks({
      title: filters.title || undefined,
      minPrice: filters.minPrice ?? undefined,
      maxPrice: filters.maxPrice ?? undefined,
      publisher: filters.publisher || undefined,
      page: 1,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tìm kiếm sách..."
        style={styles.input}
        value={filters.title}
        onChangeText={(text) => setFilters({ ...filters, title: text })}
      />

      <View style={styles.row}>
        <TextInput
          placeholder="Giá từ"
          keyboardType="numeric"
          style={styles.inputHalf}
          value={filters.minPrice !== null ? filters.minPrice?.toString() : ""}
          onChangeText={(text) =>
            setFilters({ ...filters, minPrice: text ? parseFloat(text) : undefined }) // ✅ Thay null -> undefined
          }
        />
        <TextInput
          placeholder="Giá đến"
          keyboardType="numeric"
          style={styles.inputHalf}
          value={filters.maxPrice !== null ? filters.maxPrice?.toString() : ""}
          onChangeText={(text) => setFilters({ ...filters, maxPrice: text ? parseFloat(text) : undefined })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Tìm kiếm</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.publisher}>{item.publisher.name}</Text>
              <Text style={styles.price}>{item.price}₫</Text>
            </View>
          )}
          ListFooterComponent={
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={(page: number) =>
                fetchBooks({
                  ...filters,
                  page,
                  minPrice: filters.minPrice ?? undefined,
                  maxPrice: filters.maxPrice ?? undefined, 
                })
              }
            />


          }
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: { borderWidth: 1, padding: 8, borderRadius: 8, marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  inputHalf: { width: "48%", borderWidth: 1, padding: 8, borderRadius: 8 },
  button: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, alignItems: "center", marginBottom: 8 },
  buttonText: { color: "white", fontWeight: "bold" },
  bookItem: { borderBottomWidth: 1, paddingVertical: 8 },
  title: { fontSize: 16, fontWeight: "bold" },
  publisher: { color: "gray" },
  price: { color: "blue", fontWeight: "bold" },
  error: { color: "red", textAlign: "center" },
});
