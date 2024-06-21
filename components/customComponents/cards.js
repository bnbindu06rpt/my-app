import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FloatingButton from './floatingButton';
 
 
const loans = [
    { id: '1', custid: '1001', applicantName: 'Pratheksha Anand', status: 'Approved', location: 'Bangalore', dob: '11/01/1988', number: '9117765656' },
    { id: '2', custid: '1002', applicantName: 'Mike Johnson', status: 'Rejected', location: 'Delhi', dob: '12/09/1994', number: '9007765656' },
    { id: '3', custid: '1003', applicantName: 'Thomas Smith', status: 'Pending', location: 'Delhi', dob: '19/07/1998', number: '9880765656' },
    { id: '4', custid: '1004', applicantName: 'Sachin S', status: 'Pending', location: 'Mumbai', dob: '10/09/1980', number: '8887765656' },
    { id: '5', custid: '1005', applicantName: 'Mahima Bhat', status: 'Saved', location: 'Bangalore', dob: '05/01/1989', number: '8887712356' },
    { id: '6', custid: '1006', applicantName: 'Ishaan Khan', status: 'Approved', location: 'Bangalore', dob: '15/12/2001', number: '8110065656' },
   
];
 
const LoanSummaryCards = ({ onFilter }) => {
    const noOfApplications = loans.length;
    const pending = loans.filter(loan => loan.status === 'Pending').length;
    const approved = loans.filter(loan => loan.status === 'Approved').length;
    const rejected = loans.filter(loan => loan.status === 'Rejected').length;
    const exception = loans.filter(loan => loan.status === 'Exception').length;
    const saved = loans.filter(loan => loan.status === 'Saved').length;

    console.disableYellowBox = true;
 
    return (
        <View style={styles.summaryContainer}>
            <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Exception')}>
                <Ionicons name="alert-circle" size={20} color="#FF0000" />
                <Text style={styles.summaryHeading}>Exception</Text>
                <Text style={styles.summaryValue}>{exception}</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
 
            <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Rejected')}>
                <Ionicons name="close-circle" size={20} color="#FF0000" />
                <Text style={styles.summaryHeading}>Rejected</Text>
                <Text style={styles.summaryValue}>{rejected}</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Pending')}>
                <Ionicons name="time" size={20} color="#FFA500" />
                <Text style={styles.summaryHeading}>Pending</Text>
                <Text style={styles.summaryValue}>{pending}</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Approved')}>
                <Ionicons name="checkmark-circle" size={20} color="#008000" />
                <Text style={styles.summaryHeading}>Approved</Text>
                <Text style={styles.summaryValue}>{approved}</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Saved')}>
                <Ionicons name="bookmark" size={20} color="green" />
                <Text style={styles.summaryHeading}>Saved</Text>
                <Text style={styles.summaryValue}>{saved}</Text>
            </TouchableOpacity>
        </View>
    );
};
 
const LoanList = () => {
    const [filteredLoans, setFilteredLoans] = useState(loans.filter(loan => loan.status === 'Pending'));
 
    const handleFilter = (status) => {
        if (status === 'All') {
            setFilteredLoans(loans);
        } else {
            setFilteredLoans(loans.filter(loan => loan.status === status));
        }
    };
 
    const getStatusBadgeStyle = (status) => {
        switch (status) {
            case 'Approved':
                return styles.approvedBadge;
            case 'Pending':
                return styles.pendingBadge;
            case 'Saved':
                return styles.approvedBadge;
            case 'Exception':
                return styles.rejectedBadge;
            case 'Rejected':
                return styles.rejectedBadge;
            default:
                return styles.defaultBadge;
        }
    };
 
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.applicantName}>{item.applicantName}</Text>
                <View style={[styles.badge, getStatusBadgeStyle(item.status)]}>
                    <Text style={styles.badgeText}>{item.status}</Text>
                </View>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.row}>
            <Text style={styles.data}>Customer ID:</Text>
            <Text style={styles.details}> {item.custid}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.data}>Date of Birth:</Text>
            <Text style={styles.details}>{item.dob}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.data}>Mobile Number:</Text>
            <Text style={styles.details}>{item.number}</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.data}>Location:</Text>
            <Text style={styles.details}>{item.location}</Text>
            </View>
        </View>
    );
 
    return (
        <View style={styles.container}>
            <LoanSummaryCards onFilter={handleFilter} />
            <FlatList
                data={filteredLoans}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};
 
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    verticalLine: {
        width: 1,
        height: '100%',
        backgroundColor: '#ccc',
        marginHorizontal: 10,
    },
    summaryHeading: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#333',
    },
    summaryValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00408F',
    },
    listContainer: {
        padding: 20,
    },
    card: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 2,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    applicantName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    // details: {
    //     fontSize: 14,
    //     color: '#666',
    //     marginBottom: 5,
    // },
    details: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'right',
      flexShrink: 1
    },
    data: {
      color: '#023B5E',
      fontSize: 14,
      textAlign: 'left',
    },
    status: {
        fontWeight: 'bold',
        color: '#008000',
    },
    badge: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 2,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    approvedBadge: {
        backgroundColor: '#008000',
    },
    pendingBadge: {
        backgroundColor: '#FFA500',
    },
    rejectedBadge: {
        backgroundColor: '#FF0000',
    },
    defaultBadge: {
        backgroundColor: '#ccc',
    },
});
 
export default LoanList;