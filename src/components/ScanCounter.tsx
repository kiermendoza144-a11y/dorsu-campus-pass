import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface ScanCounterProps {
  count: number;
  isActive: boolean;
  showPeerDemo: boolean; 
  onScan: () => void;
  onReset: () => void;
  onToggleSuspension: () => void; 
  onTogglePeerDemo: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({ 
  count, 
  isActive,
  showPeerDemo,
  onScan, 
  onReset,
  onToggleSuspension,
  onTogglePeerDemo
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Campus Gate Verification Log</Text>
      </View>
      
      <View style={styles.counterDisplay}>
        <Text style={styles.label}>Today's Gate Entries:</Text>
        <Text style={styles.value}>{count}</Text>
      </View>
      
      <View style={styles.btnRow}>
        <Pressable 
          style={({pressed}) => [styles.btnPrimary, pressed && styles.pressed]} 
          onPress={onScan}
          disabled={!isActive} 
        >
          <Text style={[styles.btnPrimaryText, !isActive && styles.textDisabled]}>+1 Scan at Gate</Text>
        </Pressable>
        
        <Pressable 
          style={({pressed}) => [styles.btnSecondary, pressed && styles.pressed]} 
          onPress={onReset}
        >
          <Text style={styles.btnSecondaryText}>Reset Scans</Text>
        </Pressable>
      </View>

      {}
      {isActive ? (
        <Pressable 
          style={({pressed}) => [styles.btnDanger, pressed && styles.pressed]} 
          onPress={onToggleSuspension}
        >
          <Text style={styles.btnDangerText}>⚠️ Simulate Pass Suspension</Text>
        </Pressable>
      ) : (
        <Pressable 
          style={({pressed}) => [styles.btnSuccess, pressed && styles.pressed]} 
          onPress={onToggleSuspension}
        >
          <Text style={styles.btnSuccessText}>✅ Reactivate Student Pass</Text>
        </Pressable>
      )}
      
      {}
      <Pressable 
        style={({pressed}) => [styles.btnOutline, pressed && styles.pressed]} 
        onPress={onTogglePeerDemo}
      >
        <Text style={styles.btnOutlineText}>
          {showPeerDemo ? 'Hide Peer Demo' : 'Show Peer Component Demo'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  header: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 16,
    marginTop: -16, 
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  counterDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#555555',
  },
  value: {
    fontSize: 20,
    fontWeight: '800',
    color: '#007BFF', 
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  btnPrimary: {
    flex: 1,
    backgroundColor: '#005A8D', 
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  textDisabled: {
    opacity: 0.5,
  },
  btnSecondary: {
    flex: 1,
    backgroundColor: '#E9ECEF', 
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnSecondaryText: {
    color: '#495057',
    fontSize: 13,
    fontWeight: '600',
  },
  btnDanger: {
    backgroundColor: '#FCE8E8',
    borderWidth: 1,
    borderColor: '#F5C2C2',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnDangerText: {
    color: '#C5221F',
    fontSize: 13,
    fontWeight: '600',
  },
  btnSuccess: {
    backgroundColor: '#E6F4EA', 
    borderWidth: 1,
    borderColor: '#B7E1C5',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnSuccessText: {
    color: '#137333', 
    fontSize: 13,
    fontWeight: '600',
  },
  btnOutline: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CED4DA',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnOutlineText: {
    color: '#005A8D',
    fontSize: 13,
    fontWeight: '600',
  },
});