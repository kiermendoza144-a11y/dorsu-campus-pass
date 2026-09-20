import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
  showCampus?: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ 
  student, 
  isActive, 
  showCampus = true 
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
       <Image 
  source={typeof student.avatarUrl === 'string' ? { uri: student.avatarUrl } : student.avatarUrl} 
  style={styles.avatar} 
/>
        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>
      
      <StatusBadge isActive={isActive} />
      
      {showCampus && (
        <View style={styles.footer}>
          <Text style={styles.campus}>Campus: {student.campus}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E1E1E1',
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  idNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 2,
  },
  program: {
    fontSize: 12,
    color: '#555555',
    marginBottom: 2,
  },
  yearLevel: {
    fontSize: 12,
    color: '#555555',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
    marginTop: 4,
    alignItems: 'center',
  },
  campus: {
    fontSize: 11,
    color: '#888888',
  },
});