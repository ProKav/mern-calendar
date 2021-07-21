import React, { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { Navbar } from '../ui/Navbar'
import { messages } from '../helpers/calendar-messages'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { events, localizer } from '../helpers/calendar-events-config'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../actions/ui'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { eventSetActive } from '../actions/events'
import { AddNewFab } from '../ui/AddNewFab'

export const CalendarScreen = () => {
	const dispatch = useDispatch()

	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'month',
	)
	const onDoubleClick = e => {
		dispatch(uiOpenModal())
	}

	const onSelectEvent = e => {
		dispatch(eventSetActive(e))
		dispatch(uiOpenModal())
	}

	const onViewChange = e => {
		setLastView(e)
		localStorage.setItem('lastView', e)
	}

	const eventGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#C6D13B',
			borderRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: '#241B45',
		}
		return { style }
	}

	return (
		<div className='calendar__screen'>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccesor='start'
				endAccesor='end'
				messages={messages}
				eventPropGetter={eventGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelectEvent}
				onView={onViewChange}
				view={lastView}
			/>
			<AddNewFab />
			<CalendarModal />
		</div>
	)
}
