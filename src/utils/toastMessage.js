import React from 'react';
import toast from 'react-hot-toast';

const toastParameters = {
	duration: 4000,
	style: {
		width: '22rem',
		height: '80px',
	},
	// Aria
	role: 'status',
	ariaLive: 'polite',
};

export default function toastMessage(type, message) {
	if (type === 'success') {
		toast.success(message, toastParameters);
	} else if (type === 'error') {
		toast.error(message, toastParameters);
	}
}
