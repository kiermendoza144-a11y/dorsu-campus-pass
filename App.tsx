import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';

import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentProfile } from './src/types/student'; 

const mockStudent: StudentProfile = {
  name: 'Carl Angelo T. Peñaranda',
  idNumber: 'ID: 2023-2415',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section F',
  avatarUrl: require('./assets/gelo.png'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

const mockPeerStudent: StudentProfile = {
  name: 'LEONARDO CABILLADA GWAPO',
  idNumber: 'ID: 2023- ? ',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3Rd Year — Section F',
  avatarUrl: require('./assets/nardo.png'), 
  campus: '', 
};

export default function App() {
  const [scanCount, setScanCount] = useState(3);
  const [isActive, setIsActive] = useState(true); 
  const [showPeerDemo, setShowPeerDemo] = useState(false);

  const handleScan = () => setScanCount((prev) => prev + 1);
  const handleReset = () => setScanCount(0);
  
  const handleToggleSuspension = () => {
    setIsActive((prev) => !prev);
   
    if (!isActive) setScanCount(3); 
    else setScanCount(0);
  };

  const handleTogglePeerDemo = () => {
    setShowPeerDemo((prev) => !prev);
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar style="light" />
      
      <SafeAreaView style={styles.phoneFrame}>
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerWrapper}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
              <Text style={styles.headerSubtitle}>
                FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
              </Text>
              <View style={styles.headerBadge}>
                <Text style={styles.headerBadgeText}>
                  OFFICIAL STUDENT DIGITAL PASS • AY 2026-2027
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.mainContent}>
            <StudentCard student={mockStudent} isActive={isActive} />
            
            <ScanCounter 
              count={scanCount}
              isActive={isActive}
              showPeerDemo={showPeerDemo}
              onScan={handleScan} 
              onReset={handleReset}
              onToggleSuspension={handleToggleSuspension}
              onTogglePeerDemo={handleTogglePeerDemo}
            />

            {}
            {showPeerDemo && (
              <View style={styles.peerDemoContainer}>
                <Text style={styles.peerDemoTitle}>PEER PROPS DEMO:</Text>
                <StudentCard 
                  student={mockPeerStudent} 
                  isActive={true} 
                  showCampus={false} 
                />
              </View>
            )}
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1A1C29', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 420, 
    backgroundColor: '#F4F6F8', 
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.5, shadowRadius: 20 },
      android: { elevation: 10 },
    }),
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#006A6A', 
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 16, 
    borderBottomWidth: 4,
    borderBottomColor: '#F5A623', 
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#E0F2F1',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  headerBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  headerBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
  },
  peerDemoContainer: {
    marginTop: -8, 
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  peerDemoTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#006A6A',
    marginBottom: 12,
    letterSpacing: 0.5,
  }
});