import type { Action } from 'svelte/action';

export interface InViewEventDetail {
	entry: IntersectionObserverEntry;
}

export interface InViewParams {
	threshold?: number;
}

export interface InViewEvents {
	'on:enter': (e: CustomEvent<InViewEventDetail>) => void;
	'on:leave': (e: CustomEvent<InViewEventDetail>) => void;
}

export const inView: Action<HTMLElement, InViewParams, InViewEvents> = (
	node,
	params = { threshold: 0.2 }
) => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.dispatchEvent(
						new CustomEvent<InViewEventDetail>('enter', {
							detail: { entry }
						})
					);
				} else {
					node.dispatchEvent(
						new CustomEvent<InViewEventDetail>('leave', {
							detail: { entry }
						})
					);
				}
			});
		},
		{
			threshold: params.threshold
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
};
