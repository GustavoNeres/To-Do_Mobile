import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';
import styles from './style'

import date from '../../assets/icons/date.png'
import time from '../../assets/icons/time.png'

export default function DateTimeInputAndoid({ type, save, date, hour }) {
    const [dateTime, setDateTime] = useState();
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const newTime = (event, value) => {
        const currentDate = value || dateTime;
        if (type == 'date') {
            setShow(false);
            setDateTime(format(new Date(currentDate), 'dd/MM/yyyy'));
            save(format(new Date(currentDate), 'yyyy-MM-dd'));
        } else {
            setShow(false);
            setDateTime(format(new Date(currentDate), 'HH:mm'));
            save(format(new Date(currentDate), 'HH:mm'));
        }
    };

    async function selectDataOrHour() {
        if (type == 'date') {
            setShow(true);
            setMode('date');

        } else {
            setShow(true);
            setMode('time');

        }
    }

    useEffect(() => {
        if (type === 'date' && date) {
            setDateTime(format(new Date(date), 'dd/MM/yyyy'));

        }
        if (type === 'hour' && hour) {
            setDateTime(format(new Date(hour), 'HH:mm'));

        }
    }, [])
    return (
        <TouchableOpacity onPress={selectDataOrHour}>
            <TextInput
                style={styles.input}
                placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...'}
                editable={false}
                value={dateTime}
            />
            {
                show &&
                <DateTimePicker
                    value={new Date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={newTime}

                />
            }


            <Image
                style={styles.iconTextInput}
                source={type == 'date' ? date : time} />
        </TouchableOpacity>
    )

}