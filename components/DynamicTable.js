import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function DynamicTable({
  title,
  description,
  columns,
  data,
  actions,
  pagination,
  onActionClick,
}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>

      {/* Table */}
      <ScrollView horizontal style={styles.tableWrapper}>
        <View>
          {/* Column Headers */}
          <View style={styles.headerRow}>
            {columns.map((column) => (
              <Text key={column.key} style={[styles.cell, styles.headerCell]}>
                {column.label}
              </Text>
            ))}
            {actions.length > 0 && (
              <Text style={[styles.cell, styles.headerCell]}>Actions</Text>
            )}
          </View>

          {/* Data Rows */}
          {data.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {columns.map((column) => (
                <Text
                  key={column.key}
                  style={[
                    styles.cell,
                    column.isGray ? styles.grayText : null,
                  ]}
                >
                  {row[column.key]}
                </Text>
              ))}

              {/* Actions */}
              {actions.length > 0 && (
                <View style={[styles.cell, styles.actionsCell]}>
                  {actions.map((action, actionIndex) => (
                    <TouchableOpacity
                      key={actionIndex}
                      style={[
                        styles.actionButton,
                        { backgroundColor: action.color || '#007BFF' },
                      ]}
                      onPress={() => onActionClick(action.key, row)}
                    >
                      <Text style={styles.actionText}>{action.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Pagination */}
      {pagination && (
        <View style={styles.pagination}>
          <TouchableOpacity
            disabled={!pagination.prev}
            onPress={pagination.onPrev}
          >
            <Text
              style={[
                styles.pageButton,
                !pagination.prev && styles.disabledButton,
              ]}
            >
              Previous
            </Text>
          </TouchableOpacity>
          <Text style={styles.pageIndicator}>
            Page {pagination.current} of {pagination.total}
          </Text>
          <TouchableOpacity
            disabled={!pagination.next}
            onPress={pagination.onNext}
          >
            <Text
              style={[
                styles.pageButton,
                !pagination.next && styles.disabledButton,
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
  tableWrapper: {
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  actionsCell: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
  },
  grayText: {
    color: '#999',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageButton: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  disabledButton: {
    color: '#ccc',
  },
  pageIndicator: {
    fontSize: 14,
    color: '#555',
  },
});
