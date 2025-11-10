/**
 * Utility to construct safe mailto: URLs for frontend-only contact forms
 */

export interface MailtoParams {
  to: string;
  subject: string;
  body: string;
}

/**
 * Constructs a mailto: URL with properly encoded subject and body
 */
export function buildMailto({ to, subject, body }: MailtoParams): string {
  const params = new URLSearchParams({
    subject: subject,
    body: body,
  });

  return `mailto:${to}?${params.toString()}`;
}

/**
 * Formats contact form data into email body text
 */
export function formatContactBody(data: {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  message: string;
}): string {
  return `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.city}
Project Type: ${data.projectType}

Message:
${data.message}

---
Sent from Nordic Kitchen Solutions contact form`;
}

/**
 * Copy text to clipboard with fallback support
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      textArea.remove();
      return true;
    } catch (err) {
      textArea.remove();
      return false;
    }
  }
}
