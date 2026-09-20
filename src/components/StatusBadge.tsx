import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatusBadgeProps {
  isActive: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => {
  return (
    <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
      <View style={[styles.dot, isActive ? styles.dotActive : styles.dotInactive]} />
      <Text style={[styles.text, isActive ? styles.textActive : styles.textInactive]}>
        STATUS: {isActive ? 'VERIFIED ACTIVE PASS' : 'ACCESS TEMPORARILY SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 16,
    marginBottom: 8,
    borderWidth: 1,
  },
  badgeActive: {
    backgroundColor: '#E6F4EA', 
    borderColor: '#B7E1C5', 
  },
  badgeInactive: {
    backgroundColor: '#FCE8E8', 
    borderColor: '#F5C2C2',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  dotActive: {
    backgroundColor: '#137333', 
  },
  dotInactive: {
    backgroundColor: '#C5221F',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },
  textActive: {
    color: '#137333', 
  },
  textInactive: {
    color: '#C5221F',
  },
});